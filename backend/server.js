import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import remedyRoutes from "./routes/remedyRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/remedies", remedyRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});