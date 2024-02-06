import { useEffect, useState } from "react";

function UseEffectHookDemo(props) {
  const [name, setName] = useState("John");
  const [interval, setIntervalState] = useState(null);
  //   useEffect(() => {
  //     console.log("Without dependency array");
  //   });
  //   useEffect(() => {
  //     console.log("Empty dependency array");
  //   }, []);
  //   useEffect(() => {
  //     console.log("With Dependecy State");
  //     // API call
  //   }, [name]);
  useEffect(() => {
    console.log("With Dependecy prop", name);
    const interval = setInterval(() => {
      console.log(Math.floor(Math.random() * 10));
    }, 1000);
    setIntervalState(interval);
    // Connection
    return () => {
      clearInterval(interval);
      console.log("Cleaning up", name);
    };
  }, [props.randomValue, name]);
  return (
    <div>
      Use Effect hook
      {props.randomValue}
      <button
        onClick={() => {
          setName("Somename" + Math.random() * 10);
        }}
      >
        Child Component onClick
      </button>
    </div>
  );
}
export default UseEffectHookDemo;

// No dependency array       => Every time a state or props is changed/ component is rerender
// Empty dependency array    => Is called only once during component mounting
// With some dependency      => Initially as well as when the provided dependency is changed.
// Cleanup function
