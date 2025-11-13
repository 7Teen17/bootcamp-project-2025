import { Blog } from "@/typings/blog";
import mongoose, { Schema } from "mongoose";
import connectDB from "./db";
import { NextResponse } from "next/server";

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

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

async function getBlogBySlug(slug: string): Promise<NextResponse> {
  await connectDB(); // function from db.ts before
  try {
    const blog = await BlogModel.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export default BlogModel;
export { getBlogs, getBlogBySlug };
