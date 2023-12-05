import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "types/types";

const initialState = {
  notes: [] as Note[],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<Note>) => {
      state.notes = [payload, ...state.notes];
    },

    editNote: (state, { payload }: PayloadAction<Note>) => {
      const { id } = payload;
      state.notes = state.notes.map((note) => {
        if (note.id === id) return payload;
        return note;
      });
    },

    deleteNote: (state, { payload }: PayloadAction<Note>) => {
      const { id } = payload;
      state.notes = state.notes.filter((note) => {
        if (note.id !== id) return note;
      });
    },
  },
});

export const { addNote, editNote, deleteNote } = NotesSlice.actions;

export default NotesSlice.reducer;
