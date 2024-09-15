import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import productRouter from "../src/routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import orderRouter from "./routes/order.router.js";
import paymentRouter from "./routes/payment.router.js";
import sellerRouter from "./routes/seller.router.js";
import userRouter from "./routes/user.router.js";
const app = express();
dotenv.config({
  path: "./.env",
});
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow the necessary HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/sellers", sellerRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/payment", paymentRouter);

// api for creating payment order

export { app };
