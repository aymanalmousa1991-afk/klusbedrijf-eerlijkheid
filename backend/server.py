from fastapi import FastAPI, APIRouter, HTTPException, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import os
import logging
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Klusbedrijf Eerlijkheid API")

# CORS middleware - handel OPTIONS preflight en voeg headers toe
@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    # OPTIONS preflight requests direct afhandelen
    if request.method == "OPTIONS":
        response = Response()
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.headers["Access-Control-Max-Age"] = "86400"
        return response
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

api_router = APIRouter(prefix="/api")


# ----- Models -----
class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    service_type: str  # stukadoor | tegels | renovatie | verf | uitbouw | onderhoud | anders
    location: str
    start_date: str  # ISO date string
    duration: str  # e.g. "2 dagen", "1 week"
    message: Optional[str] = None


class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    company: Optional[str] = None
    service_type: str
    location: str
    start_date: str
    duration: str
    message: Optional[str] = None
    status: str = "nieuw"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())



# ----- Email Notificatie -----
NOTIFICATION_EMAIL = os.getenv("NOTIFICATION_EMAIL", "info@klusbedrijf-eerlijkheid.nl")
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")


async def send_notification(subject: str, body: str):
    if not SMTP_USER or not SMTP_PASS:
        logger.warning(f"Geen SMTP credentials. Email niet verstuurd.\nOnderwerp: {subject}\n{body}")
        return

    msg = MIMEMultipart()
    msg["From"] = SMTP_USER
    msg["To"] = NOTIFICATION_EMAIL
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain", "utf-8"))

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
        logger.info(f"Email notificatie verstuurd: {subject}")
    except Exception as e:
        logger.error(f"Email notificatie mislukt: {e}")

async def get_db():
    """Dependency voor MongoDB connectie"""
    yield db

# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Klusbedrijf Eerlijkheid API", "status": "ok"}


@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    booking = Booking(**payload.model_dump())
    doc = booking.model_dump()
    await db.bookings.insert_one(doc)

    # Email notificatie
    subject = f"Nieuwe offerte-aanvraag van {booking.name}"
    body = f"""Nieuwe offerte-aanvraag via Klusbedrijf Eerlijkheid

Naam: {booking.name}
E-mail: {booking.email}
Telefoon: {booking.phone}
Bedrijf: {booking.company or '-'}
Type dienst: {booking.service_type}
Locatie: {booking.location}
Startdatum: {booking.start_date}
Geschatte duur: {booking.duration}
Bericht: {booking.message or '-'}

Status: {booking.status}
Datum: {booking.created_at}
    """
    logger.info(f"Booking notificatie wordt verstuurd voor {booking.name}")
    await send_notification(subject, body)

    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings():
    items = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return items


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.model_dump()
    await db.contact_messages.insert_one(doc)

    # Email notificatie
    subject = f"Nieuw contactbericht van {msg.name}"
    body = f"""Nieuw contactbericht via Klusbedrijf Eerlijkheid

Naam: {msg.name}
E-mail: {msg.email}
Telefoon: {msg.phone or '-'}
Bericht: {msg.message}

Datum: {msg.created_at}
    """
    logger.info(f"Contact notificatie wordt verstuurd voor {msg.name}")
    await send_notification(subject, body)

    return msg


@api_router.get("/company")
async def get_company():
    """Static company info (KvK details from registration)."""
    return {
        "name": "Klusbedrijf Eerlijkheid",
        "owner": "Klusbedrijf Eerlijkheid",
        "kvk": "99765985",
        "address": "Nederland",
        "phone": "0643690981",
        "email": "info@klusbedrijf-eerlijkheid.nl",
        "website": "https://klusbedrijf-eerlijkheid.nl",
        "start_date": "2024-01-01",
        "activities": [
            "Stukadoor",
            "Tegels zetten",
            "Renovatie",
            "Verf & Schilderwerk",
            "Uitbouw & Aanbouw",
        ],
        "sbi_codes": ["4120", "4331", "4332", "4333", "4334"],
    }





@api_router.post("/reviews")
async def create_review(review: dict, db: AsyncIOMotorDatabase = Depends(get_db)):
    """Een nieuwe review opslaan"""
    review_data = {
        "name": review.get("name"),
        "text": review.get("text"),
        "rating": review.get("rating", 5),
        "created_at": datetime.now(timezone.utc),
                "approved": False,
    }
    # Clean text: vervang \n door spatie
    if review_data["text"]:
        review_data["text"] = review_data["text"].replace("\\n", " ").replace("\n", " ").replace("\r", " ")
    result = await db.reviews.insert_one(review_data)
    review_data["_id"] = str(result.inserted_id)
    return {"success": True, "review": review_data}


@api_router.delete("/reviews/cleanup")
async def cleanup_test_reviews(db: AsyncIOMotorDatabase = Depends(get_db)):
    """Verwijder alle niet-goedgekeurde test reviews"""
    result = await db.reviews.delete_many({"approved": False})
    return {"deleted": result.deleted_count}

@api_router.get("/reviews")
async def get_reviews(db: AsyncIOMotorDatabase = Depends(get_db)):
    """Opgeslagen reviews ophalen (goedgekeurd)"""
    try:
        cursor = db.reviews.find().sort("created_at", -1).limit(20)
        reviews = []
        async for doc in cursor:
            doc["_id"] = str(doc["_id"])
            reviews.append(doc)
        return reviews
    except Exception as e:
        return []


app.include_router(api_router)



logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
