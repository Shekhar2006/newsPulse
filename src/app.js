import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import healthRoute from "./routes/health.route.js";


const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// routes

app.use("/health", healthRoute);

export default app;
