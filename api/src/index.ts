import { Request, Response } from "express";
import express from "express";
import { v4 } from "uuid";
import * as ContentRouter from "./routes/content.js";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  // show all routes
});

app.use("/api/content", ContentRouter.default);

export default app;
