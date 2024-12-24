import { createContext, useState } from "react";
import { Todo } from "../lib/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TTodoContextType = {
  todos: Todo[];
  totalTodos: number;
  completedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodoContext = createContext<TTodoContextType | null>(null);
export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {
  //state
  const [todos, setTodos] = useState<Todo[]>([]);

  //derived state
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  //event handlers
  const handleAddTodo = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: todoText,
        isCompleted: false,
      },
    ]);
  };
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        totalTodos,
        completedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
