import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();

//body parser
app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());

//port 
const PORT = process.env.PORT;

//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

//mongoose connect
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then((data: any) =>
    console.log(`server connected to ${data.connection.host}`)
  )
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

//unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found`) as any;
  error.statusCode = 400;
  next(error);
});
