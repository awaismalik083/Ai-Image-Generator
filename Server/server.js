import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import router from "./Routes/stableDiffusion.js";
dotenv.config();
import router1 from "./Routes/postRoute.js";

const app = express();
const port = process.env.PORT || 3000;
// ✅ Explicit
app.use(
  cors({
    origin: "https://ai-image-generator-six-jade.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "50mb" }));

connectdb();

// ✅ Routes
app.use("/api/v1/stable", router); // Handles /api/v1/stable for DALL·E image generation
app.use("/api/v1/post", router1);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
