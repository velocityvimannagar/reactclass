import { useData } from "./UseData";
import { useOnlineStatus } from "./UseOnlineStatus";

export function StatusBar() {
  const isOnline = useOnlineStatus();
  const userSettings = useData();
  return <h1>{isOnline ? "User is Online" : "User is Offline"}</h1>;
}
