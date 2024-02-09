import { useState } from "react";
import "./create-post.css";

export function CreatePost({ onCreate }) {
  const [postData, setPostData] = useState({
    title: "",
    userId: 1,
    body: "",
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    postData[name] = value;
    setPostData({ ...postData });
  };
  return (
    <div className="create-post-component">
      <div className="create-post-form">
        <label>Title</label>
        <input placeholder="Title" name="title" onChange={onInputChange} value={postData.title}></input>
        <label>Body</label>
        <textarea placeholder="Enter Post Body" name="body" onChange={onInputChange} value={postData.body}></textarea>

        <button
          onClick={() => {
            onCreate(postData.title, postData.body);
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}
