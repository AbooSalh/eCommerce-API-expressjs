// Importing necessary modules
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";

// Configure environment variables
dotenv.config({ path: ".env" });

// Create an Express application
const app = express();
// connect to MongoDB

mongoose
  .connect(process.env.DB_URL as string, { dbName: process.env.DB_NAME })
  .then((conn) => {
    console.log(`MongoDB connected: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
// Use morgan middleware for logging in development environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Define a route handler for the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

const port = process.env.PORT;
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
