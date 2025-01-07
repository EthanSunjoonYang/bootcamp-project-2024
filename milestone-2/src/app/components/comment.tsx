import React from "react";
import { IComment } from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

// Function to format the comment time
function parseCommentTime(time: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Include day of the week
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(time).toLocaleString(undefined, options); // Use locale options for formatting
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comments">
      <p>{comment.user}: {comment.comment} {new Date(comment.time).toLocaleDateString()}</p>
    </div>
  );
}