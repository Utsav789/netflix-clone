import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDb connected" + conn.connection.host);
  } catch (error) {
    console.log("Error connected to MongoDb:  " + error.message);
    process.exit(1);
  }
};
