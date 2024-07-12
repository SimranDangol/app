import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connecttoMongoDB from './db/connecttoMongoDB.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connecttoMongoDB();
  console.log(`Server started running on port ${PORT}`);
});
