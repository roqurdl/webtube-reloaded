import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("Server-error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  res.render(`watch`, { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Uploading Video` });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect(`/`);
};
