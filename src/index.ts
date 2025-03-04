// Importing necessary modules
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// Configure environment variables
dotenv.config({ path: ".env" });

// Create an Express application
const app = express();

// Retrieve port from environment variables
const port = process.env.PORT;

// Use morgan middleware for logging in development environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Define a route handler for the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

