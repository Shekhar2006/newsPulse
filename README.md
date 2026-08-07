# 📰 NewsPulse

A production-ready backend application that delivers **personalized daily and weekly email newsletters** based on users' preferred news categories.

NewsPulse fetches the latest headlines from **NewsData.io**, stores user subscriptions in **PostgreSQL**, and automatically sends beautiful HTML newsletters using **Node Cron** and **Nodemailer**.

---

## 🚀 Live Demo

### Live API

```
https://newspulse-production-8428.up.railway.app
```

### Health Check

```
https://newspulse-production-8428.up.railway.app/api/health
```

---

# ✨ Features

- 📰 Latest news from NewsData.io
- 📧 Beautiful HTML email newsletters
- 👤 User subscription management
- 📂 Multiple news categories
- ⏰ Daily & Weekly automated newsletters
- 🗄 PostgreSQL database
- ⚡ Prisma ORM
- 🛡 Zod request validation
- 🚨 Global error handling
- 🐳 Docker support
- ☁ Railway deployment
- 🌍 RESTful API architecture

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
          Newsletter Template
                   │
                   ▼
              Nodemailer
                   │
                   ▼
                 Email
```

---

# 📁 Folder Structure

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

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Prisma ORM

## Validation

- Zod

## Email

- Nodemailer

## Scheduler

- Node Cron

## External API

- NewsData.io

## Deployment

- Railway

## Containerization

- Docker
- Docker Compose

---

# ⚙ Environment Variables

Create a `.env` file:

```env
PORT=5000

NODE_ENV=development

DATABASE_URL=your_database_url

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_gmail_app_password

NEWSDATA_API_KEY=your_newsdata_api_key

NEWSDATA_BASE_URL=https://newsdata.io/api/1
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Shekhar2006/newsPulse.git
```

Go inside project

```bash
cd newsPulse
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations (or push schema)

```bash
npx prisma db push
```

Start development server

```bash
npm run dev
```

---

# 🐳 Docker

Build and run

```bash
docker compose up --build
```

Application runs on

```
http://localhost:5000
```

---

# 📬 API Endpoints

## Health Check

```
GET /api/health
```

---

## Get Top Headlines

```
GET /api/news
```

Query Parameter

| Name | Example |
|------|---------|
| category | technology |

Example

```
GET /api/news?category=technology
```

---

## Subscribe User

```
POST /api/users/subscribe
```

Example Request

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

## Unsubscribe User

```
DELETE /api/users/unsubscribe
```

---

## Send Test Newsletter

```
POST /api/mail/newsletter
```

Example

```json
{
  "email":"john@example.com",
  "category":"technology"
}
```

---

# 📧 Newsletter

NewsPulse automatically generates responsive HTML newsletters containing:

- News grouped by category
- Featured images
- Description
- Read More button
- Publication source
- Publication date

---

# ⏰ Automated Jobs

## Daily Newsletter

Runs every day using Node Cron.

---

## Weekly Newsletter

Runs every week using Node Cron.

---

# 🛡 Error Handling

- Global Error Middleware
- Custom AppError
- Validation Errors
- External API Errors
- Database Errors

---

# 📷 Screenshots

## API Response

> *(Add screenshot here)*

```
assets/api-news.png
```

---

## Newsletter

> *(Add screenshot here)*

```
assets/newsletter.png
```

---

## Railway Deployment

> *(Add screenshot here)*

```
assets/railway.png
```

---

# 🌟 Future Improvements

- JWT Authentication
- OAuth Login
- Redis Caching
- Admin Dashboard
- Email Queue (BullMQ + Redis)
- Background Workers
- Swagger API Documentation
- Unit Testing
- Integration Testing
- CI/CD Pipeline

---

# 👨‍💻 Author

**Shekhar**

Computer Engineering Student

GitHub:

https://github.com/Shekhar2006

LinkedIn:

> Add your LinkedIn profile here

---

# 📄 License

This project is licensed under the MIT License.