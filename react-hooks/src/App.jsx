import { useEffect } from "react";
import { useState } from "react";

function App() {
   const [todos, setTodos] = useState([]);

   useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async(res)=>{
       const json =await  res.json();
       setTodos(json.todos);
      })
      },10000,[])
    })
  
   
  return (
    
      <div>
      {todos.map(function(todo){
       return <Todos key={todo.id} title = {todo.title} description = {todo.description}></Todos>
      })}
      </div>
      
    
  )
  function Todos({title,description}){
   return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  
   )
}
}

export default App
