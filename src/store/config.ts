import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { todoSlice } from "./todoSlice";
import { nameSlice } from "./nameSlice";

const logger = createLogger();

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  name: nameSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  // configureStore 함수에 파라미터 객체 넣음
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
