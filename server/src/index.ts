import express, { Request, Response, urlencoded, json } from "express";
import { config } from "dotenv";
import { authRouter, ratingRouter, storeRouter, userRouter } from "./routes";
import cors from "cors";

// Load environment variables from .env file
config();

const app = express();

const PORT = process.env.PORT || 3000;

//Middelwares
app.use(json());

app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Store Rating Platform.");
});

//Routes
app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/store", storeRouter);

app.use("/api/rating", ratingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
