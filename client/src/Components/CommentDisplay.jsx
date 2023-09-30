import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CommentDisplay = ({ postId }) => {
  const [comments, setComments] = useState({});

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <div>{renderedComments}</div>;
};

export default CommentDisplay;
