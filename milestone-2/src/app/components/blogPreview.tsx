import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from "../blogData"; 


export default function BlogPreview({ title, description, image, imageAlt, date}: Blog) {
    return (
      <div className = 'blog'>
        <h3> {title} {date}</h3>
          <img src={image} alt= {imageAlt} width={300} height={300} />
        <p>{description}</p>
      </div>
    );
  }