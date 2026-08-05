import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import healthRoute from "./routes/health.route.js";
import newsRoute from "./routes/news.route.js";
import errorHandler from "./middleware/error.middleware.js";


const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// routes

app.use("/health", healthRoute);
app.use("/api/news", newsRoute);

app.use(errorHandler);


export default app;
