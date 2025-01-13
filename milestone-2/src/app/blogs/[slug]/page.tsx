import Comment from "../../components/comment";
import CommentForm from "../../components/comment-form";
import { IComment } from "@/app/database/blogSchema";
import { Key } from "react";

type Props = {
  params: Promise<{ slug: string }>; // Handle params as a Promise
};

async function fetchBlog(slug: string): Promise<any> {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.error(`Error: ${err}`);
    return null;
  }
}

export default async function Blogs({ params }: Props) {
  // Resolve the promise to get the params
  const { slug } = await params;

  // Fetch the blog as a promise
  const blogPromise = fetchBlog(slug);

  // Resolve the blog data
  const blog = await blogPromise;

  console.log("blog", blog);

  // If no blog is found, render a fallback message
  if (!blog) {
    return (
      <div>
        <p>This Page doesn't exist</p>
      </div>
    );
  }

  // Render the blog content
  return (
    <div className="blogs">
      <h1>{blog.title}</h1>
      <img src={blog.image} width={300} height={300} alt={blog.title} />
      <p className="blog_paragraph">{blog.content}</p>
      <div className="comment">
        <h2>Comments</h2>
        <div className="comments">
          {blog.comments.map(
            (comment: IComment, index: Key | null | undefined) => (
              <Comment key={index} comment={comment} />
            )
          )}
        </div>
      </div>
      <CommentForm slug={slug} />
    </div>
  );
}



// import Comment from "../../components/comment";
// import CommentForm from "../../components/comment-form";
// import { IComment } from "@/app/database/blogSchema";
// import { Key } from "react";

// type Props = {
//   params: { slug: string };
// };

// async function getBlog(slug: string) {
//   try {
//     // This fetches the blog from an api endpoint that would GET the blog
//     const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
//       cache: "no-store",
//     });
//     // This checks that the GET request was successful
//     if (!res.ok) {
//       throw new Error("Failed to fetch blog");
//     }

//     return res.json();
//   } catch (err: unknown) {
//     console.log(`error: ${err}`);
//     return null;
//     // `` are a special way of allowing JS inside a string
//     // Instead of "error: " + err, we can just do the above
//     // it is simular to formated strings in python --> f"{err}"
//   }
// }

// export default async function Blogs({ params: { slug } }: Props) {
//   const blog = await getBlog(slug);

//   console.log("blog", blog);

//   if (!blog) {
//     return (
//       <div>
//         <p> This Page doesnt exist </p>
//       </div>
//     );
//   }

//   return (
//     <div className="blogs">
//       <h1>{blog.title}</h1>
//       <img src={blog.image} width={300} height={300} />
//       <p className="blog_paragraph">{blog.content}</p>
//       <div className="comment">
//         <h2>Comments</h2>
//         <div className="comments">
//           {blog.comments.map(
//             (comment: IComment, index: Key | null | undefined) => (
//               <Comment key={index} comment={comment} />
//             )
//           )}
//         </div>
//       </div>
//       <CommentForm slug={slug} />
//     </div>
//   );
// }
