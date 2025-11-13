import ProjectPreview from "@/components/projectPreview";
import { getProjects } from "@/database/projectSchema";

export default async function Portfolio() {
  const projects = await getProjects();
  if (projects === null) {
    return (
      <div className="flex-1 flex flex-col space-y-5 justify-center items-center text-white text-xl">
        <p>Failed to load projects</p>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col items-center text-white text-xl">
      {projects.map((project) => (
        <ProjectPreview
          key={project._id}
          title={project.title}
          description={project.description}
          image={project.image}
          imageAlt={project.imageAlt}
          url={project.url}
        />
      ))}
    </div>
  );
}
