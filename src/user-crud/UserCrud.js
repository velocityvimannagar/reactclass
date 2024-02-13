import { useState } from "react";
import "./UserCrud.css";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";
import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";

function UserCrud() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
    },
    {
      id: 3,
      name: "Rock",
      email: "rock@gmail.com",
    },
    {
      id: 4,
      name: "Mark",
      email: "mark@gmail.com",
    },
  ]);

  const onAddUser = (name, email) => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: name,
        email: email,
      },
    ]);
  };

  const onDelete = (id) => {
    console.log("Deleting", id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([...filteredUsers]);
  };

  return (
    <div>
      <h1>User Crud Application</h1>

      <Routes>
        <Route path="/" element={<Navigate to="list" />}></Route>
        <Route
          path="/list"
          element={<UserList users={users} onDelete={onDelete}></UserList>}
        ></Route>
        <Route
          path="/create"
          element={<CreateUser onAddUser={onAddUser}></CreateUser>}
        ></Route>
      </Routes>
      {/* <CreateUser onAddUser={onAddUser}></CreateUser>
      <UserList users={users} onDelete={onDelete}></UserList> */}
    </div>
  );
}
export default UserCrud;

{
  /* http://localhost:3000/users/list */
}

{
  /* http://localhost:3000/users/details/1 */
}
{
  /* http://localhost:3000/users/create */
}
