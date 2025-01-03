import React from "react";
//import { Blog }from "../blogData"; 
import connectDB from "../database/db"
import Project from "../database/projectSchema";
import ProjectPreview from "../components/projectPreview";
import projects from "../projectData"

async function getProjects(){
  await connectDB() 

  try {
      const projects = await Project.find().sort({ date: -1 }).orFail()
      return projects;
  } catch (err) {
      return null
  }
}

export default function Projects(props: Project){
  return(
  <div className = 'projects'>
        {projects.map(project => 
    <ProjectPreview 
    title={project.title}
    description={project.description}
    image={project.image}
    slug={project.slug}
    /> 
  )}
  </div>
  );
}
