import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/typings/blog";

export default function BlogPreview(props: Blog) {
  const date = new Date(props.date).toDateString();
  return (
    <Link
      href={`/blog/${props.slug}`}
      className="flex flex-row bg-white rounded-lg text-black p-10 w-1/2"
    >
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={300}
        height={300}
        className="mr-3"
      ></Image>
      <div className="flex flex-col justify-around">
        <h3>
          <strong> {props.title} </strong>
        </h3>
        <p>{props.description}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
}
