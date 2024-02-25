import { useState } from "react";

function App(){
  const [count,setCount] = useState(0);


  
  return <div>
  <CustumButton count = {count} setCount = {setCount}></CustumButton>
  </div>
}

function CustumButton(props){
  function onClickHandler(){
    props.setCount(props.count+1); 
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
    </button>
}
export default App