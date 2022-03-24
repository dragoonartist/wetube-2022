import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, username, password, name, location } = req.body;
  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const login = (req, res) => res.send("login");

export const see = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("Edit Profile");
export const deleteProfile = (req, res) => res.send("Delete Profile");
