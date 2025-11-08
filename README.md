# Technical Assignment

A multi-language Next.js app with a Nest.js backend API.

## Quick Start

### Backend Setup

1. Go to server folder:
```bash
cd server
```

2. Install packages:
```bash
npm install
```

3. Setup database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Start server:
```bash
npm run dev
```

Server runs on: http://localhost:3001

### Frontend Setup

1. Go to client folder:
```bash
cd client
```

2. Install packages:
```bash
npm install
```

3. Start app:
```bash
npm run dev
```

App runs on: http://localhost:3000

## What It Does

### Backend
- **POST /auth/register** - Create new user account
- **POST /auth/login** - Login with email and password

### Frontend
- Two pages: `/home` and `/about`
- Two languages: English (EN) and Romanian (RO)
- Language switcher in header
- Language preference saved in browser

## How to Use

1. Start both backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Click EN or RO buttons in header to change language
4. Navigate between Home and About pages
5. Language choice is remembered when you refresh

## Tech Stack

- **Frontend**: Next.js 16, TypeScript, React
- **Backend**: Nest.js, TypeScript, Prisma, SQLite
- **Database**: SQLite (file: `server/prisma/dev.db`)

## Project Structure

```
teck-tasck/
├── client/     # Next.js frontend
└── server/     # Nest.js backend
```

