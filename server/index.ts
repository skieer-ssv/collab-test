import express, { Express } from "express";
import dotenv from "dotenv";
import geminiRouter from "./gemini/gemini_route"
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.use("/", geminiRouter);

const port = process.env.PORT ?? 3001;



app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});