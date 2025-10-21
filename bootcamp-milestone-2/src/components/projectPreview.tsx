import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/typings/project";

export default function ProjectPreview(props: Project) {
  return (
    <div className="flex flex-row border-2 w-250 h-100 max-w-250 max-h-100 rounded-xl items-center p-5">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>

      <div className="flex-2 pl-2">
        <p className="project-name">{props.title}</p>
        <p className="project-description">{props.description}</p>
        <Link href={props.url}>Link to Page</Link>
      </div>
    </div>
  );
}
