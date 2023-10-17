import axios from "axios";
import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentDisplay from "./CommentDisplay";

const PostList = () => {
  const [posts, setPost] = useState({});

  const fetchPost = async () => {
    try {
      const res = await axios.get("http://localhost:4002/posts");
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
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
          <CommentDisplay comments={post.comments} />
        </div>
      </div>
    );
  });
  return <div className="flex justify-center">{renderedPosts}</div>;
};

export default PostList;
