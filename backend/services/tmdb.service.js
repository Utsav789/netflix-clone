import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";
import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

export const fetchFromTMDB = async (url) => {
  try {
    if (!ENV_VARS.TMDB_API_KEY) {
      throw new Error("TMDB API Key is missing");
    }

    const options = {
      method: 'GET',
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY1ZThiMmFhYWQwMDg5ODdmODMwZGE1YmM5YjJlZSIsIm5iZiI6MTczNjQ3NDcyMS4xNDQsInN1YiI6IjY3ODA4MDYxNDRkNjQ5ZmZhZTdiNjIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bBCAHkVOIr-K3xX2pcH5j--hnyLSrSRxxv8mUgO_Ko',
      },
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch data from TMDB: ${response.status} - ${response.statusText}`
      );
    }

    return response.data;
  } catch (error) {
    console.error("Error in fetchFromTMDB:", error.message);
    return null; // Or handle as appropriate for your application
  }
};
