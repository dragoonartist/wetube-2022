const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 4,
    createdAt: "3 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "2nd Video",
    rating: 5,
    comments: 4,
    createdAt: "3 minutes ago",
    views: 7,
    id: 2,
  },
  {
    title: "3rd Video",
    rating: 5,
    comments: 4,
    createdAt: "3 minutes ago",
    views: 10256,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Wathing: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const title = req.body.title;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "Just Now~",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
