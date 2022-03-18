import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hasgtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;