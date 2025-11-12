import ProjectPreview from "@/components/projectPreview";
import projects from "../projectData";

export default function Portfolio() {
  return (
    <div className="flex-1 flex flex-col items-center text-white text-xl">
      {projects.map((project) => (
        <ProjectPreview key={project.title} {...project} />
      ))}
    </div>
  );
}
