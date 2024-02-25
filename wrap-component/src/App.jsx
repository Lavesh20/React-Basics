function App() {
   return (
    <>
      <CardWrapper ><div>Hi There</div></CardWrapper>
      <CardWrapper ><div>Hello There</div></CardWrapper>
      <CardWrapper><div><TextComponent></TextComponent></div> </CardWrapper>
    </>
 )
 function TextComponent(){
  return(
    <div>
      From TextComponent
    </div>
  )
 }
 function CardWrapper({children}){
  console.log(children)
      return (
       <div
       style = {{border:"2px solid black", padding:20}}>{children}</div>
      
      )
 }
}

export default App
