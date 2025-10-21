import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/typings/project";

export default function ProjectPreview(props: Project) {
  return (
    <div className="flex flex-row border-2 w-250 h-100 max-w-250 max-h-100 rounded-xl items-center p-5 bg-white m-5">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>

      <div className="flex-2 pl-5 text-black font-(family-name:--font-geist-sans)">
        <p className="font-bold">{props.title}</p>
        <p className="project-description">{props.description}</p>
        <Link href={props.url} className="text-green-300">
          Link to Page
        </Link>
      </div>
    </div>
  );
}
