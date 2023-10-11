import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";
function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="flex flex-wrap min-h-screen items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full">
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <AddTodo />

            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              TODO List
            </h1>
            <div className="flex flex-wrap gap-y-3"></div>
            {todos.map((t) => (
              <div key={t.id} className="w-full">
                <Todo todo={t} key={t.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
