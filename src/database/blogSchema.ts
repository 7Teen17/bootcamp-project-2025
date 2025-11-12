import { Blog } from "@/typings/blog";
import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: Date.now },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true },
  text: { type: String, required: true },
});

const BlogModel =
  mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default BlogModel;
