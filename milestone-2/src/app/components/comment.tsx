import React from "react";
import { IComment } from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comments">
      <p>{comment.user}: {comment.comment} {new Date(comment.time).toLocaleDateString()}</p>
    </div>
  );
}