import { useParams } from "react-router-dom";

export function UserDetails() {
  const params = useParams();
  return <div>User Details Component: UserID is: {params.user_id}</div>;
}
