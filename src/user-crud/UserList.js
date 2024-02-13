import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";

export function UserList({ users, onDelete }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/users/create");
        }}
      >
        Create User
      </button>
      <br></br>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      onDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
