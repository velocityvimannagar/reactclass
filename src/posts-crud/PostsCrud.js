import { useEffect, useState } from "react";
import { PostList } from "./PostList";
import axios from "axios";
import { CreatePost } from "./CreatePost";

function PostsCrud() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => {
        setPosts(response.data);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);
  const onDelete = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log("Response", response);
        const filteredPost = posts.filter((post) => post.id !== id);
        setPosts(filteredPost);
      })
      .catch((err) => alert(err.message));
  };
  const onCreate = (title, body) => {
    console.log('Data', title, body)
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((response) => {
        posts.unshift(response.data)
        setPosts([...posts])
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <h1>Posts CRUD</h1>
      <CreatePost onCreate={onCreate}></CreatePost>
      <PostList posts={posts} onDelete={onDelete}></PostList>
    </div>
  );
}
export default PostsCrud;

// Get all posts and show the list
// Delete Post
// Create new Post
// Update existing post
