import React from "react";
import axios from "axios";
import { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex gap-3">
          <label>Comment</label>
          <input
            className="border-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 p-2 px-4 rounded-lg my-5">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
