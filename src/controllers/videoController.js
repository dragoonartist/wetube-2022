export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 4,
      createdAt: "3 minutes ago",
      views: 31,
      id: 1,
    },
    {
      title: "2nd Video",
      rating: 5,
      comments: 4,
      createdAt: "3 minutes ago",
      views: 31,
      id: 1,
    },
    {
      title: "3rd Video",
      rating: 5,
      comments: 4,
      createdAt: "3 minutes ago",
      views: 31,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
