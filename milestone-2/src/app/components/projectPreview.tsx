import React from 'react';
import Project from "../database/projectSchema"; 


export default function BlogPreview({ title, description, image,}: Project) {
    return (
        <div className="project">
        <a href="/">
          <img src={image} alt="an image"/>
        </a>
        <div className="project-details">
          <p className="project-name">{title}</p>
          <p className="project-description">{description}</p>
          <a href="/">Learn More</a>
        </div>
      </div>
    );
  }