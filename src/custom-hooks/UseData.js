import { useEffect, useState } from "react";

export function useData() {
  const [userSettings, setUserSettings] = useState([]);
  useEffect(() => {
    // Fetch Data from API
    setUserSettings([{ isNotificationOn: true }]);
  }, []);
  return userSettings;
}
