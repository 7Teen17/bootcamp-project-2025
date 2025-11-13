import { Project } from "@/typings/project";
import mongoose, { Schema } from "mongoose";
import { NextResponse } from "next/server";
import connectDB from "./db";

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  url: { type: String, required: true },
});

const ProjectModel =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

async function getProjectBySlug(slug: string): Promise<NextResponse> {
  await connectDB(); // function from db.ts before
  try {
    const project = await ProjectModel.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export { getProjects, getProjectBySlug };
export default ProjectModel;
