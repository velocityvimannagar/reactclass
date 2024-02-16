import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedCompnent) {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        console.log('I am not authenticated')
        navigate("/login");
      }
    }, [navigate]);
    return <WrappedCompnent {...props} isLoggedIn={"Yes"}></WrappedCompnent>;
  };
}

function ExampleComponent({ name, isLoggedIn }) {
  return (
    <div>
      HOC Demo, My prop is {name}
      <br></br>
      Authentication: {isLoggedIn}
    </div>
  );
}

export default withAuth(ExampleComponent);
