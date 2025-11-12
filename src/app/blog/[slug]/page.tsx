import blogs from "@/app/blogData";
import { Blog } from "@/typings/blog";
import Image from "next/image";
import React from "react";
import { use } from "react";

type PageProps = { params: { slug: string } };

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params;
  var blog = blogs.find((blog) => blog.slug == slug.slug);
  if (!blog) {
    return (
      <div>
        <p>Blog not found.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-white font">
      <div className="max-w-8/10 flex flex-col items-center space-y-5">
        <Image src={blog.image} alt={blog.imageAlt} width={500} height={500} />
        <h1 className="font-bold text-xl">{blog.title}</h1>
        <p>{blog.date}</p>
        <p>{blog.text}</p>
      </div>
    </div>
  );
}
