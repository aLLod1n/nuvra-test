# Technical Assignment

## Setup

### Backend

```bash
cd server
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Backend runs on: http://localhost:3001

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on: http://localhost:3000

## Testing

1. Open http://localhost:3000 in browser
2. Click EN or RO buttons to switch language
3. Navigate between Home and About pages
4. Refresh page - language choice is saved

## API Endpoints

**POST /auth/register**
```json
{
  "email": "x@x.com",
  "password": "test123",
  "name": "My name"
}
```

**POST /auth/login**
```json
{
  "email": "x@x.com",
  "password": "test123"
}
```

