import React from 'react';
import Project from "../database/projectSchema"; 
import Link from 'next/link';


export default function BlogPreview({ title, description, image, slug}: Project) {
    return (
        <div className="project">
        <Link href={slug}>
          <img src={image} alt="an image"/>
        </Link>
        <div className="project-details">
          <p className="project-name">{title}</p>
          <p className="project-description">{description}</p>
          <Link href="/">Learn More</Link>
        </div>
      </div>
    );
  }