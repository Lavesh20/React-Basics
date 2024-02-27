import { useState } from "react";
import { useMemo } from "react";

function Hook2() {
  const[input,setInput] = useState(1);
  const [counter,setCounter] = useState(0);  
  let sum = useMemo(()=>{
    let sum = 0
  for(let i = 0;i<=input;i++){
    sum = sum + i;
  }
  return sum
  },[input])

   return (
    <div>
    <input type="text" placeholder="Enter the number" onChange={(e)=>{
      setInput(e.target.value);
    }} />
    <h3>{`The sum is ${sum}`}</h3><br />
    {/* <button onClick={()=>{
      setCounter(counter+1)
    }}>Counter {counter}</button> */}
    </div>
   )

   
  }
  


export default Hook2;
