export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => {
  //   console.log(req.params);
  return res.send(`See Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit Video #${req.params.id}`);
};
export const deleteVideo = (req, res) => res.send("Delete Video");
