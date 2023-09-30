import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentDisplay from "./CommentDisplay";

const PostList = () => {
  const [posts, setPost] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPost(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
          <CommentDisplay postId={post.id} />
        </div>
      </div>
    );
  });
  return <div className="flex justify-center">{renderedPosts}</div>;
};

export default PostList;
