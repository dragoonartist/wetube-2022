import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { email, username, password, confirmPassword, name, location } =
    req.body;
  const pageTitle = "Join";
  if (password !== confirmPassword) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const usernameExist = await User.exists({ username });
  if (usernameExist) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username is already exists.",
    });
  }
  const emailExist = await User.exists({ email });
  if (emailExist) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This email is already exists.",
    });
  }

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
