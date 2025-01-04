import React from "react";
import blogs from "../blogData";
import BlogPreview from "../components/blogPreview";
//import { Blog }from "../blogData"; 
import connectDB from "../database/db"
import Blog from "../database/blogSchema";

async function getBlogs(){
    await connectDB() 
  
    try {
        const blogs = await Blog.find().sort({ date: -1 }).orFail()
        return blogs;
    } catch (err) {
        return null
    }
}

  export default async function Blogs() {
    const blogs = await getBlogs();
    if (!blogs || blogs.length === 0) {
        return <div>No blogs available.</div>;
      }
    return(
        <div className = 'blogs'>
              {blogs.map(blog => 
          <BlogPreview 
          title={blog.title}
          description={blog.description}
          image={blog.image}
          imageAlt="an image"
          date={blog.date.toLocaleString()}
          slug={blog.slug}
          /> 
            )}
        </div>
    );
}
