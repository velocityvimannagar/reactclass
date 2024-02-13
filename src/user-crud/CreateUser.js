import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function CreateUser({ onAddUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="user-form">
      <input onChange={onNameChange} value={name} placeholder="Name"></input>
      <input onChange={onEmailChange} value={email} placeholder="Email"></input>
      <button
        onClick={() => {
          if (name !== "" && email !== "") {
            onAddUser(name, email);
            navigate(-1);
          }
        }}
      >
        Add User
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </button>
    </div>
  );
}
