import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, username, password, confirmPassword, name, location } =
    req.body;
  const pageTitle = "Join";
  if (password !== confirmPassword) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const usernameExist = await User.exists({ $or: [{ username }] });
  if (usernameExist) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username is already exists.",
    });
  }
  const emailExist = await User.exists({ email });
  if (emailExist) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This email is already exists.",
    });
  }
  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errMessage: error._message,
    });
  }
};
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exist.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  res.redirect("/");
};

export const see = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("Edit Profile");
export const deleteProfile = (req, res) => res.send("Delete Profile");
