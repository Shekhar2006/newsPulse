# 📰 NewsPulse

A backend-powered personalized newsletter application that fetches the latest news based on user interests and automatically sends beautifully formatted daily or weekly newsletters via email.

Built using **Node.js**, **Express.js**, **PostgreSQL**, **Prisma ORM**, **NewsData.io API**, **Nodemailer**, **Node Cron**, and **Docker**.

---

## ✨ Features

- 📰 Fetch latest news by category
- 📧 Email newsletter with responsive HTML template
- ⏰ Automatic Daily & Weekly newsletters using Cron Jobs
- 👤 User subscription management
- 📂 Multiple category subscriptions
- 🛡 Request validation using Zod
- 🚨 Global error handling with custom AppError
- 🗄 PostgreSQL database with Prisma ORM
- 🐳 Dockerized application
- 🌍 REST API architecture

---

# 🏗 Architecture

```
                Client
                   │
                   ▼
              Express Routes
                   │
                   ▼
             Controllers
                   │
                   ▼
               Services
          ┌────────┴─────────┐
          ▼                  ▼
     PostgreSQL         NewsData API
          │                  │
          ▼                  ▼
        Prisma          News Mapper
                   │
                   ▼
             HTML Template
                   │
                   ▼
              Nodemailer
                   │
                   ▼
                 Email

```

---

# 📁 Project Structure

```
newsPulse/

├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── errors/
│   ├── generated/
│   ├── jobs/
│   ├── mappers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── templates/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# ⚙ Tech Stack

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

### Email

- Nodemailer

### Scheduler

- Node Cron

### Validation

- Zod

### External API

- NewsData.io

### Containerization

- Docker
- Docker Compose

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/newspulse.git

cd newspulse
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

DATABASE_URL=

EMAIL_USER=

EMAIL_PASS=

NEWSDATA_API_KEY=
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Development Server

```bash
npm run dev
```

---

# 🐳 Docker

Build Image

```bash
docker compose up --build
```

Application runs on

```
http://localhost:5000
```

---

# 📬 API Endpoints

## Health

```
GET /api/health
```

---

## Get News

```
GET /api/news
```

Query Parameters

```
category=technology
```

Example

```
GET /api/news?category=technology
```

---

## Subscribe User

```
POST /api/users/subscribe
```

Example

```json
{
  "email": "john@example.com",
  "categories": [
    "technology",
    "business"
  ],
  "frequency": "daily"
}
```

---

## Update Subscription

```
PUT /api/users/update
```

---

## Unsubscribe

```
DELETE /api/users/unsubscribe
```

---

## Send Test Newsletter

```
POST /api/mail/newsletter
```

---

# ⏰ Scheduled Jobs

### Daily Newsletter

Runs every day at **8:00 AM**

---

### Weekly Newsletter

Runs every Sunday at **8:00 AM**

---

# 📧 Sample Newsletter

The application generates a responsive HTML newsletter containing:

- News grouped by category
- Images
- Source
- Publish date
- Read More button

---

# 🛡 Error Handling

- Global Error Middleware
- Custom AppError
- Validation Errors
- External API Errors
- Database Errors

---

# 🔮 Future Improvements

- JWT Authentication
- OAuth Login
- Redis Caching
- Admin Dashboard
- User Preferences
- Unsubscribe Token
- Email Queue using BullMQ
- Background Workers
- Unit & Integration Tests
- CI/CD Pipeline

---

# 👨‍💻 Author

**Shekhar**

Computer Engineering Student

---

# 📜 License

This project is licensed under the MIT License.