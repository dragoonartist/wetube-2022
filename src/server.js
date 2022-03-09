import express from "express";
import morgan from "morgan";

const PORT = 4001;
const app = express();

const logger = morgan("dev");

const home = (req, res) => {
  return res.send("Wow, Server is running!");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${PORT} 😌`);

app.listen(PORT, handleListening);
