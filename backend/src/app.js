import  express  from "express";
import authRouter from "./routers/auth";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";
import productRouter from "./routers/product";
import cartRouter from "./routers/cart";

const app = express(); 
dotenv.config();
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//connect
connectDB(process.env.DB_URI);
//routers
app.use("/api/v1", authRouter)
app.use("/api/v1", productRouter)
app.use("/api/v1", cartRouter)

export const viteNodeApp = app;