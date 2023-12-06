import { configureStore } from "@reduxjs/toolkit";
import { FilterSlice, NotesSlice } from "./slice";

export const store = configureStore({
  reducer: {
    notes: NotesSlice,
    filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
