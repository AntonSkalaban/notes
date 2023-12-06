import { getUnicArray } from "../../helpers/getUnicArray";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "shared/store/store";
import { getFilterValues } from "./FilterSelector";

export const getNotes = (state: RootState) => state.notes.notes;

export const getFileredNotes = createSelector(
  [getNotes, getFilterValues],
  (notes, hashtags) => {
    return hashtags.length
      ? notes.filter((note) =>
          note.hashtags.some((hashtag) => hashtags.includes(hashtag))
        )
      : notes;
  }
);

export const getNotesHashTags = createSelector(getNotes, (state) => {
  return getUnicArray(
    state.reduce((acc, note) => acc.concat(...note.hashtags), [] as string[])
  );
});
