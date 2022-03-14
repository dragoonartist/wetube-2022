import express from "express";
import { Router } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userrouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4001;

const app = express();
app.set("view engine", "pug");

const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${PORT} 😌`);

app.listen(PORT, handleListening);
