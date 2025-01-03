import React from "react";
//import { Blog }from "../blogData"; 
import connectDB from "../database/db"
import Project from "../database/projectSchema";
import ProjectPreview from "../components/projectPreview";

async function getProjects(){
  await connectDB() 

  try {
      const projects = await Project.find().sort({ date: -1 }).orFail()
      return projects;
  } catch (err) {
      return null
  }
}

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectPreview
          key={project.slug} // Ensure unique key
          title={project.title}
          description={project.description}
          image={project.image}
          slug={project.slug}
        />
      ))}
    </div>
  );
}
