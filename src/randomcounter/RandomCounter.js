import { useState } from "react";

function RandomCounter() {
  let [count, setCount] = useState(300);
  const increment = () => {
    setCount(count+100)
  }
  const getConditionInfo= () =>{
    if(count==1000){
        return <div>Count is equal to 1000</div>
    }else if(count <1000){
        return <div>Count is less to 1000</div>
    }else{
        return <div>Count is Greater than 1000</div>
    }
  }

  const getSomeView = () =>{
    return <div>
      <div>
       <p>Something</p>
      </div>
    </div>
  }
  return (
    <div>
      <button onClick={increment}>Add</button>
      <br></br>
      <br></br>
      Count: {count}
      {count > 1000 && <>
           <div></div>
           <div></div>
        </>}
        {count > 1000 && getSomeView()}
      {/* {getConditionInfo()} */}
      {/* {count>=1000 ? <div>Greater than 1000</div> : <div>Less than 1000</div>} */}
    </div>
  );
}
export default RandomCounter;
