import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import type { Blog } from "@/typings/blog";

export default async function Blog() {
  const blogs = await getBlogs();
  if (blogs === null) {
    return (
      <div className="flex-1 flex flex-col space-y-5 justify-center items-center text-white text-xl">
        <p>Failed to load blogs</p>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col space-y-5 justify-center items-center text-white text-xl">
      {blogs.map((blog) => (
        <BlogPreview
          key={blog._id}
          title={blog.title}
          date={blog.date.toDateString()}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          text={blog.text}
        />
      ))}
    </div>
  );
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
