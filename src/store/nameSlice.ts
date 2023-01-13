import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./config";

interface todo {
  name: string;
}

const initialState: todo = {
  name: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<{ name: string }>) {
      state.name = action.payload.name;
    },
  },
});

export const { changeName } = nameSlice.actions;

export const selectName = (state: RootState) => state.name;
