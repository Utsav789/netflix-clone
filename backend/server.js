import express from "express";
import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDb } from "./config/db.js";

const app = express();
app.use(express.json());

const PORT = ENV_VARS.PORT;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server started at Port 5000.");
  connectDb();
});
