import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleError = (error) => console.log("😈 DB Error:", error);
const onOpenDB = () => console.log("😼 DB is Connected!");

db.on("error", handleError);
db.once("open", onOpenDB);
