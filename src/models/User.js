import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  avatarUrl: String,
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  socialOnly: { type: Boolean, default: false },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 7);
});

const User = mongoose.model("User", userSchema);

export default User;
