import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "./config";

export interface ITodo {
  id: number;
  title: string;
  owner: string;
}

interface todo {
  Backlog: ITodo[];
  Todo: ITodo[];
  Doing: ITodo[];
  Done: ITodo[];
}

const initialState: todo = {
  Backlog: [
    { id: 0, title: "공부하기", owner: "채연" },
    { id: 1, title: "책읽기", owner: "채연" },
  ],
  Todo: [{ id: 1, title: "책읽기", owner: "채연" }],
  Doing: [{ id: 1, title: "12", owner: "채연" }],
  Done: [{ id: 1, title: "34", owner: "채연" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeTodo(state, action: PayloadAction<string>) {
      state.Todo[0].title = action.payload;
      console.log(current(state.Todo[0]));
    },
  },
  extraReducers: {},
});

export const { changeTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
