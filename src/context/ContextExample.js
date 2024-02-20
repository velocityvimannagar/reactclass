import React, { useContext, useState } from "react";

const MyContext = React.createContext();
export function ContextExample() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h3>Context Example</h3>
      <MyContext.Provider value={theme}>
        <button onClick={() => setTheme("light")}> Light </button>
        <button onClick={() => setTheme("dark")}> Dark </button>
        <br></br>
        My Theme: {theme}
        <br></br>
        <SubComponent></SubComponent>
      </MyContext.Provider>
    </div>
  );
}

const SubComponent = () => {
  return (
    <div>
      <br></br>
      <GrandChildComponent></GrandChildComponent>
    </div>
  );
};

const GrandChildComponent = () => {
  const theme = useContext(MyContext);
  return (
    <div>
      <br></br>
      Context Theme: {theme}
    </div>
  );
};
