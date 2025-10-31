import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <div className="flex-1 flex flex-col space-y-5 justify-center items-center text-white text-xl">
      {blogs.map((blog) => (
        <BlogPreview key={blog.title} {...blog} />
      ))}
    </div>
  );
}
