import mongoose, { model, Schema } from "mongoose";
const bSchema = mongoose.Schema;
const blogSchema = new bSchema({
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
export default mongoose.model("Blog", blogSchema);
