export function PostList({ posts, onDelete }) {
  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>User Id</th>
          <th>Action</th>
        </thead>
        <tbody>
          {posts.map((post) => {
            return <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.userId}</td>
                <td><button onClick={()=>{
                    onDelete(post.id)
                }}>Delete</button></td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
