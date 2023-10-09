import { useState, useId } from "react";
import { useTodo } from "../context/TodoContext";
function TodoForm() {
  const [todoValue, setTodoValue] = useState("");
  const { addTodo } = useTodo();
  // const todoId = useId();
  const createTodo = (e) => {
    e.preventDefault();
    if (!todoValue) return;
    console.log(todoValue);
    addTodo({ todo: todoValue, complete: false });
    setTodoValue("");
  };
  return (
    <form className="flex" onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
