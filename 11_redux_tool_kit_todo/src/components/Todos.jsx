import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  updateTodo,
  todoCompleted,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>TODO List</h1>

      {todos.map((t) => (
        <li key={t.id}>
          {t.text} <button onClick={() => dispatch(removeTodo(t.id))}>x</button>
        </li>
      ))}

      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.complete}
          onChange={todoCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.complete ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.complete) return;

            if (isTodoEditable) {
              updateTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.complete}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => removeTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default Todos;
