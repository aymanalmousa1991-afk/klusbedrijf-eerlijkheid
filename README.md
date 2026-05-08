# Klusbedrijf Eerlijkheid

Vakkundig en transparant klusbedrijf. Specialist in:
- **Stukadoor** (stucwerk, sierpleister)
- **Tegels** (badkamer, keuken, vloeren)
- **Renovatie** (complete woningrenovatie)
- **Verf & Schilderwerk** (binnen en buiten)
- **Uitbouw & Aanbouw** (woonkamer vergroten, dakopbouw)

## Tech Stack

- **Frontend:** React (Create React App + CRACO), Tailwind CSS, shadcn/ui
- **Backend:** FastAPI (Python)
- **Database:** MongoDB Atlas (Motor async driver)
- **Deployment:** Render
- **Email:** SMTP via Gmail

## Lokaal draaien

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
# Kopieer .env.example naar .env en vul in
python server.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints

| Endpoint | Methode | Beschrijving |
|---|---|---|
| `/api/` | GET | Status check |
| `/api/bookings` | POST | Offerte-aanvraag indienen |
| `/api/bookings` | GET | Alle aanvragen (admin) |
| `/api/contact` | POST | Contactformulier |
| `/api/reviews` | GET | Reviews ophalen |
| `/api/reviews` | POST | Review plaatsen |
| `/api/company` | GET | Bedrijfsgegevens |

## Deployen

Zie [DEPLOY.md](DEPLOY.md) voor stapsgewijze uitleg.

