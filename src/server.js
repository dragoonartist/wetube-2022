import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userrouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "wendy",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  //   req.sessionStore.all((error, sessions) => {
  //     console.log(sessions);
  //     next();
  //   });
  next();
});

// app.get("/add-on", (req, res, next) => {
//   req.session.zagaimo += 1;
//   return res.send(`${req.sessionID}\n${req.session.zagaimo}`);
// });

app.use(localsMiddleware);

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
