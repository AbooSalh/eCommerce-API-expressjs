import express, { Request, Response } from "express";
import dotenv from "dotenv";
// .env configuration
dotenv.config({ path: ".env" });
const app = express();
const port = process.env.PORT;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
