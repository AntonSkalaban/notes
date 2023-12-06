import { getUnicArray } from "./../../helpers/getUnicArray";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export const getNotes = (state: RootState) => state.notes.notes;
export const getNotesHashTags = createSelector(getNotes, (state) => {
  return getUnicArray(
    state.reduce((acc, note) => acc.concat(...note.hashtags), [] as string[])
  );
});
