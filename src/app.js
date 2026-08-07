import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import healthRoute from "./routes/health.route.js";
import newsRoute from "./routes/news.route.js";
import userRoute from "./routes/user.route.js";
import mailRoute from "./routes/mail.route.js";
import errorHandler from "./middleware/error.middleware.js";


const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

// routes

app.use("/api/health", healthRoute);
app.use("/api/news", newsRoute);
app.use("/api/users", userRoute);
app.use("/api/mail", mailRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to NewsPulse API 🚀",
    version: "1.0.0",
    documentation: "/api/health",
  });
});

app.use(errorHandler);


export default app;
