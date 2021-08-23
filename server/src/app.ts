import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { getConnection } from "./database";
import { router as api } from "./api";
import session from "express-session";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import passportConfig from "./passport";
import passport = require("passport");
import fs from "fs";
import hpp from "hpp";
import helmet from "helmet";
import path from "path";

const PORT = process.env.PORT || 8080;

const app = express();

try {
  fs.accessSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

getConnection();

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(hpp());
  app.use(helmet());
}

app.use(express.static("uploads"));

app.use(
  cors({
    origin: ["http://localhost:3060", "hlog.website"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    requestMethod: req.method,
    message: "HLOG Rest API server",
  });
});
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", api);

app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  // Do logging and user-friendly error message display
  res.status(500).send("internal server error");
});

app.listen(PORT, () => {
  console.log(
    chalk.bgBlue.black(
      `${PORT}번 포트에서 서버 실행중입니다. (http://localhost:${PORT}/)`
    )
  );
});
