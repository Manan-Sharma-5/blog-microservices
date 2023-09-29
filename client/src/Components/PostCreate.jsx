import React from "react";
import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="flex gap-3">
          <label>Title</label>
          <input
            className="border-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 p-2 px-4 rounded-lg my-5">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
