# Deploy Guide — Klusbedrijf Eerlijkheid

## 1. MongoDB Atlas

1. Ga naar [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Maak een **M0 Sandbox cluster** aan (gratis)
3. **Database Access:** Voeg gebruiker `klusbeheer` toe met sterk wachtwoord
4. **Network Access:** Voeg `0.0.0.0/0` toe (Allow All)
5. Klik **Connect** → **Connect your application** → kopieer de connection string

## 2. Gmail App Wachtwoord

1. Ga naar [myaccount.google.com/security](https://myaccount.google.com/security)
2. Zet **2-stapsverificatie** aan
3. Ga naar **App-wachtwoorden** → kies "Overig" → naam: "Klusbedrijf Eerlijkheid"
4. Kopieer het 16-teken wachtwoord

## 3. Render — Backend

1. Ga naar [render.com](https://render.com) → **New Web Service**
2. Connect GitHub repo `klusbedrijf-eerlijkheid`
3. **Root Directory:** `backend`
4. **Build:** `pip install -r requirements.txt`
5. **Start:** `uvicorn server:app --host 0.0.0.0 --port 10000`
6. **Environment Variables:**
   ```
   MONGO_URL=mongodb+srv://klusbeheer:WACHTWOORD@cluster0.xxxxx.mongodb.net/klusbedrijf?retryWrites=true&w=majority
   DB_NAME=klusbedrijf
   NOTIFICATION_EMAIL=info@klusbedrijf-eerlijkheid.nl
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=info@klusbedrijf-eerlijkheid.nl
   SMTP_PASS=hier-16-teken-app-wachtwoord
   ```

## 4. Render — Frontend

1. **New Web Service** → Connect GitHub repo
2. **Root Directory:** `frontend`
3. **Build:** `npm install && npm run build`
4. **Publish Directory:** `build`
5. **Environment Variable:**
   ```
   REACT_APP_BACKEND_URL=https://klusbedrijf-eerlijkheid-api.onrender.com
   ```

## 5. Domein (optioneel)

1. Render → Settings → Custom Domain
2. Voeg `klusbedrijf-eerlijkheid.nl` toe
3. Stel CNAME record in bij je DNS-provider
