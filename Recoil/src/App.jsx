import { useContext, useMemo } from "react"
import { CountContext } from "./context"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count"

function App() {
 return (
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
       </div>
       )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  const Iseven = useMemo(() => {
    if (count % 2 === 0) {
      return <h3>It is even</h3>;
    } else {
      return <h3>It is odd</h3>;
    }
  }, [count]);
 return (
  <div>
    {count}
   {Iseven}
  </div>
 )
}

function Count({}){
  return (
    <div>
 <CountRenderer></CountRenderer>
 <Button />
    </div>
  )
}
function Button(){
  // const [count,setCount] =useRecoilState(countAtom); 
  const setCount = useSetRecoilState(countAtom);
   return (
    <div>
      <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
    </div>
   )
}

export default App;
