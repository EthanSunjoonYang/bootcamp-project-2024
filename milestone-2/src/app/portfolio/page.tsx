import React from "react";
//import { Blog }from "../blogData"; 
import connectDB from "../database/db"
import Project from "../database/projectSchema";

async function getBlogs(){
  await connectDB() 

  try {
      const blogs = await Project.find().sort({ date: -1 }).orFail()
      return blogs;
  } catch (err) {
      return null
  }
}

export default function Portfolio() {
    return (
        <div className="project">
        <a href="/">
          <img src="/website.jpg" alt="website image"/>
        </a>
        <div className="project-details">
          <p className="project-name">Ethan Yang's Personal Website</p>
          <p className="project-description">A website about me!</p>
          <a href="/">Learn More</a>
        </div>
      </div>
      
          ) 
  }