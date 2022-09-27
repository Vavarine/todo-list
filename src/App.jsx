import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import styles from "./index.module.css";
import "./global.css";

function App() {
  const [todos, setTodos] = useState();

  useEffect(function () {
    const todos = localStorage.getItem("todos");

    if (!todos) return;

    setTodos(JSON.parse(todos));
  }, []);

  useEffect(
    function () {
      if (!todos) return;

      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  function handleAddTodo(text) {
    const newTodo = {
      value: text,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  }

  if (!todos) return null;

  return (
    <div className={styles.container}>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
