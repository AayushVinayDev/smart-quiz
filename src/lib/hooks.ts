import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

export default function useTodosContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodosContext must be used within a TodoProvider");
  }
  return context;
}
