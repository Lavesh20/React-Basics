import { useState } from "react";
import { useEffect} from "react";
import axios from "axios";

function App() {
  const [Id, setId] = useState(1);

  function handleButtonClick(newId) {
    setId(newId);
  }

  return (
    <>
      <button onClick={() => handleButtonClick(1)}>1</button>
      <button onClick={() => handleButtonClick(2)}>2</button>
      <button onClick={() => handleButtonClick(3)}>3</button>
      <button onClick={() => handleButtonClick(4)}>4</button>
      <TodoId id={Id} />
    </>
  );

  function TodoId({ id }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(function (res) {
          setTodos(res.data.todo);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }, [id]);

    return (
      <div>
        Id : {id}
        <h1>{todos.title}</h1>
        <h3>{todos.description}</h3>
      </div>
    );
  }
}

export default App;
