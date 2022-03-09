import express from "express";
const PORT = 4001;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("Wow, This is home(/). Server is running!");
};

// app.use(logger);
app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${PORT} 😌`);

app.listen(PORT, handleListening);
