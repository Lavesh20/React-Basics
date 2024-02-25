import React from 'react'
import { useState } from 'react'

//How to prevent re-rendering or minimise it 
const App = () => {
  let counter = 4;
    const [todos, setTodos] = useState([{
      id:1,
      title:"go to college",
      description:"go to college today"
    },{
      id:2,
      title:"football",
      description:"play football today"
    },{
      id:3,
      title:"DSA",
      description:"study dsa today"
    }
  ])

  function addTodo(){
    const newTodo = [];
    for(let i =  0;i<todos.length;i++){
      newTodo.push(todos[i]);
    }
    newTodo.push({
      id:counter++,
      title:Math.random(),
      description:Math.random()
  })
  setTodos(newTodo)
  }

  return (
    <> 
    <button onClick={addTodo}>Add a Todo</button>
   { todos.map(function(todo){
       return <Todos key={todo.id} title = {todo.title} description = {todo.description}></Todos>
    })}
      
    </>
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


