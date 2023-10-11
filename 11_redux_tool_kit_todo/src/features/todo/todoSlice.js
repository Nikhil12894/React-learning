import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "snd msg", complete: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      console.log(todo);
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id != action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload.todo, text: action.payload.text }
          : t
      );
    },
    todoCompleted: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.map((t) =>
        t.id === action.payload ? { ...t, complete: !t.complete } : t
      );
    },
  },
});

export const { addTodo, updateTodo, removeTodo, todoCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
