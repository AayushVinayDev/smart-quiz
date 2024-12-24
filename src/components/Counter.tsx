import useTodosContext from "../lib/hooks";

export default function Counter() {
  const { totalTodos, completedTodos } = useTodosContext();
  return (
    <p>
      <strong>{completedTodos}</strong>/{totalTodos} todos Complete
    </p>
  );
}
