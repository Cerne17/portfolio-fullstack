// backend/src/index.ts

import express, { Request, Response } from "express";

const app = express();
const port = 3001; // You can choose any available port

// Middleware to parse JSON bodies
app.use(express.json());

// A simple route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the backend with TypeScript!");
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
