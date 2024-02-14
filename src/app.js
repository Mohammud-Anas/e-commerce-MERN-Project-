import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import sellerRouter from "./routes/seller.router.js";
import userRouter from "./routes/user.router.js";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/sellers", sellerRouter);

export { app };
