import { getBlogBySlug } from "@/database/blogSchema";
import { Blog } from "@/typings/blog";
import Image from "next/image";

type PageProps = { params: { slug: string } };

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  var response = await getBlogBySlug(slug);

  var blog: Blog = await response.json();
  const date = new Date(blog.date).toDateString();

  if (response.status !== 200) {
    return (
      <div className="flex-1 flex flex-col space-y-5 justify-center items-center text-white text-xl">
        <p>Blog not found.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-white">
      <div className="max-w-8/10 flex flex-col items-center space-y-5">
        <Image src={blog.image} alt={blog.imageAlt} width={500} height={500} />
        <h1 className="font-bold text-xl">{blog.title}</h1>
        <p>{date}</p>
        <p>{blog.text}</p>
      </div>
    </div>
  );
}
