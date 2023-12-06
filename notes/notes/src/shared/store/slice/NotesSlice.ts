import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorage } from "shared/services";
import { Note } from "shared/types/types";

const initialState = {
  notes: [] as Note[],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    initNotes: (state) => {
      state.notes = LocalStorage.getArray("notes");
    },
    addNote: (state, { payload }: PayloadAction<Note>) => {
      state.notes = [payload, ...state.notes];
      LocalStorage.setArray("notes", state.notes);
    },
    editNote: (state, { payload }: PayloadAction<Note>) => {
      const { id } = payload;
      state.notes = state.notes.map((note) => {
        if (note.id === id) return payload;
        return note;
      });
      LocalStorage.setArray("notes", state.notes);
    },

    deleteNote: (state, { payload }: PayloadAction<Note>) => {
      const { id } = payload;
      state.notes = state.notes.filter((note) => {
        if (note.id !== id) return note;
      });
      LocalStorage.setArray("notes", state.notes);
    },
  },
});

export const { initNotes, addNote, editNote, deleteNote } = NotesSlice.actions;

export default NotesSlice.reducer;
