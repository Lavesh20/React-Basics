



import {useState } from "react";
import {memo,useCallback} from "react";
import Hook2 from "./Hook2";


function Hook3() {
    const [count , setCount] = useState(0);
    const inputFunction = useCallback(()=>{
        console.log("Hi There")
    },[])
 return (
  <div>
    <ButtonComponent inputFunction = {inputFunction}></ButtonComponent>
    <button onClick={()=>{
        setCount(count + 1)
    }}>Counter {count}</button><br /><br />
    <Hook2></Hook2>
  </div>
 )
 
}
const ButtonComponent = memo(({inputFunction})=>{
    console.log("child render")
    return (
      <div>
          <button>Button Clicked</button>
      </div>
    )
})

export default Hook3;
  


