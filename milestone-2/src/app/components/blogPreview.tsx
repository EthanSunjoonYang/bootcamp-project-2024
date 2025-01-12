import React from "react";
// import { Blog } from "../blogData";
import Blog from "../database/blogSchema";
import Link from "next/link";

export default function BlogPreview({
  title,
  description,
  image,
  image_alt,
  slug,
  date,
}: Blog) {
  return (
    <Link href={`/blogs/${slug}`} className="blog-container">
      <div className="blog">
        <h3>
          {title} {date.toString()}
        </h3>
        <img src={image} alt={image_alt} width={300} height={300} />
        <p>{description}</p>
      </div>
    </Link>
  );
}
