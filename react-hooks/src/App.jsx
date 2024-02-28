



import {useRef, useState, useEffect } from "react";
function App() {
    const [incomeTax ,setIncomeTax] = useState(1000);
    const divref = useRef()
     useEffect(()=>{
        setTimeout(()=>{
            divref.current.innerHTML = 10;
        },5000)
           }) 
  
   return (
    <div>
      Hi there , your income tax returns are <div ref  = {divref}>{incomeTax}</div>
    </div>
   )
}
export default App;
  


