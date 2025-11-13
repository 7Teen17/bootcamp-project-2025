import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import { getProjects } from "@/database/projectSchema";

export async function GET(req: NextRequest) {
  await connectDB();
  const projects = await getProjects();
  return NextResponse.json(projects);
}
