import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleError = (error) => console.log("😈 DB Error:", error);
const onOpenDB = () => console.log("😼 DB is Connected!");

db.on("error", handleError);
db.once("open", onOpenDB);
