import { getBlogBySlug } from "@/database/blogSchema";
import { Blog } from "@/typings/blog";
import Image from "next/image";
import Comment from "@/components/comment";

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
  console.log(blog.comments);
  return (
    <div className="flex flex-1 flex-row items-stretch justify-start text-white h-full">
      <div className="flex flex-col items-center space-y-5 flex-3 p-5 px-15">
        <div className="flex flex-row">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={500}
            height={500}
            className="h-50 w-50 rounded-md"
          />
          <div className="pl-5 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">{blog.title}</h1>
            <p>{date}</p>
          </div>
        </div>
        <p className="text-xl">{blog.text}</p>
      </div>
      <div className="flex flex-col mr-5 bg-gray-800 p-2 w-full flex-1 h-full rounded-xl border">
        <p className="font-bold m-3 ml-0">Comments</p>
        {blog.comments.map((comment, index) => (
          <Comment
            author={comment.author}
            content={comment.content}
            date={new Date(comment.date).toLocaleString()}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
