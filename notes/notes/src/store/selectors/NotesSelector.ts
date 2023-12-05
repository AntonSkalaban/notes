import { RootState } from "store/store";

export const getNotes = (state: RootState) => state.notes.notes;
