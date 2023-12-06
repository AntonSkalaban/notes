import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  hashtags: [] as string[],
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    saveFilterValue: (state, { payload }: PayloadAction<string[]>) => {
      state.hashtags = payload;
    },
  },
});

export const { saveFilterValue } = FilterSlice.actions;

export default FilterSlice.reducer;
