import { useState } from "react";

function ObjectExample() {
  const [user, setUser] = useState({ name: "John" });
  const changeName = () => {
    user.name = "Tom";
    setUser({...user});
  };
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
export default ObjectExample;
