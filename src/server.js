import express from "express";
const PORT = 4001;
const app = express();

const handleListening = () =>
  console.log(`Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
