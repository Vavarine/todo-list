import TodoItem from "./TodoItem";
import styles from "./styles.module.css";

function TodoList({ todos, setTodos }) {
  function removeTodo(indexToRemove) {
    const newTodos = todos.filter(function (item, index) {
      return indexToRemove !== index;
    });

    setTodos(newTodos);
  }

  function changeTodoIsDone(indexToChange) {
    const newTodos = todos;
    newTodos[indexToChange].isDone = !newTodos[indexToChange].isDone;

    setTodos([...newTodos]);
  }

  return (
    <ul className={styles.container}>
      {todos.map(function (todo, index) {
        return (
          <TodoItem
            key={todo.value}
            todo={todo}
            onDoneClick={function () {
              changeTodoIsDone(index);
            }}
            onRemoveClick={function () {
              removeTodo(index);
            }}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
