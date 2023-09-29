import logo from "./logo.svg";
import React from "react";
import PostCreate from "./Components/PostCreate";
import "./App.css";

function App() {
  return (
    <div className="App p-5">
      <h1 className="font-bold text-3xl my-5">Create Post</h1>
      <PostCreate />
    </div>
  );
}

export default App;
