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
      console.log(err)
      return null
  }
}


  export default async function Projects() {
    const projects = await getProjects();
    if (!projects || projects.length === 0) {
        return <div>No projects available.</div>;
      }
    return(
        <div className = 'project'>
              {projects.map(project => 
          <ProjectPreview
          key={project.title + project.slug}
          title={project.title}
          description={project.description}
          image={project.image}
          slug={project.slug}
          /> 
            )}
        </div>
    );
}
