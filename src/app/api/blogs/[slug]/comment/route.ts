import BlogModel, {
  CommentModel,
  addCommentToBlog,
} from "@/database/blogSchema";
import connectDB from "@/database/db";
import { NextRequest } from "next/server";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(request: NextRequest, { params }: IParams) {
  const { slug } = await params;
  console.log(slug);
  // Parse and validate JSON body
  let parsed: any;
  try {
    parsed = await request.json();
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Invalid JSON", details: String(err) }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const { author, content } = parsed || {};
  if (!author || !content) {
    return new Response(
      JSON.stringify({ error: "Missing author or content" }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    await connectDB();
    const newComment = { author, content, date: new Date() };
    const updated = await addCommentToBlog(slug, newComment as any);
    if (!updated) {
      return new Response(JSON.stringify({ error: "Failed to save comment" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({ message: "Comment saved", blog: updated }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
