export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  res.end();
};
export const login = (req, res) => res.send("login");

export const see = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("logout");
export const edit = (req, res) => res.send("Edit Profile");
export const deleteProfile = (req, res) => res.send("Delete Profile");
