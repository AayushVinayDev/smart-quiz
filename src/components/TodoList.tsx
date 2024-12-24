import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { TodoContext } from "../Context/TodoContextProvider";
import useTodosContext from "../lib/hooks";

export default function TodoList() {
  useContext(TodoContext);
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 ? (
        <li className="h-full flex items-center justify-center font-semibold">
          Start by adding Todos
        </li>
      ) : null}

      {todos.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => handleToggleTodo(todo.id)}
        >
          <span
            className={` ${
              todo.isCompleted === true ? "line-through text-[#ccc]" : ""
            }`}
          >
            {" "}
            {todo.text}
          </span>
          <DeleteButton handleDeleteTodo={handleDeleteTodo} id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
