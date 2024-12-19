import React from "react";
import blogs from "../blogData";
import BlogPreview from "../components/blogPreview";
import { Blog } from "../blogData"; 
import style from '../components/blogPreview.module.css'

export default function Blogs(props: Blog){
    return(
    <div className = 'blogs'>
          {blogs.map(blog => 
      <BlogPreview 
      title={blog.title}
      description={blog.description}
      image={blog.image}
      imageAlt="an image"
      date={blog.date}
      slug={blog.slug}
      /> 
		)}
    </div>
    );
}