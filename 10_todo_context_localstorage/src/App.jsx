import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((oldTodoData) => [...oldTodoData, { id: Date.now(), ...todo }]);
  };
  const editTodo = (id, todo) => {
    setTodos((oldTodoData) =>
      oldTodoData.map((oldTodo) => (oldTodo.id === id ? todo : oldTodo))
    );
  };

  const todoComplete = (id) => {
    setTodos((oldTodoData) =>
      oldTodoData.map((oldTodo) =>
        oldTodo.id === id
          ? { ...oldTodo, complete: !oldTodo.complete }
          : oldTodo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos((oldTodoData) =>
      oldTodoData.filter((oldTodo) => oldTodo.id !== id)
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, editTodo, todoComplete, removeTodo }}
    >
      <div className="flex flex-wrap min-h-screen items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full">
          <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                Manage Your Todos
              </h1>
              <div className="mb-4">
                <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                {todos.map((t) => (
                  <div key={t.id} className="w-full">
                    <TodoItem todo={t} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
