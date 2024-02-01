import { useState } from "react";
import "./UserCrud.css";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onAddUser = () => {
    if (name !== "" && email !== "") {
    //   users.push({
    //     id: users.length + 1,
    //     name: name,
    //     email: email,
    //   });
      setUsers([...users, {
        id: users.length + 1,
        name: name,
        email: email,
      }])
    }
  };

  const onDelete = (id) =>{
    console.log('Deleting', id)
    const filteredUsers = users.filter(user => user.id !==id)
    setUsers([...filteredUsers])
  }

  

  return (
    <div>
      <h1>User Crud Application</h1>
      <div className="user-form">
        <input
          onChange={onNameChange}
          value={name}
          placeholder="Name"
        ></input>
        <input
          onChange={onEmailChange}
          value={email}
          placeholder="Email"
        ></input>
        <button onClick={onAddUser}>Add User</button>
      </div>
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
                  <button onClick={()=>{
                    onDelete(user.id)
                  }}>Delete</button>
                </td>
              </tr>
            );
          })}

          {/* <tr>
            <td>2</td>
            <td>David</td>
            <td>david@gmail.com</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rock</td>
            <td>rock@gmail.com</td>
            <td>
              <button>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
export default UserCrud;
