function CommunicationDemo(props) {
  const onButtonClick = () => {
    alert("Child");
    props.onSomeAction("Somedata")
  };
  return (
    <div>
      {props.name} {props.age}
      <button onClick={onButtonClick}>Run me</button>
    </div>
  );
}
export default CommunicationDemo;
