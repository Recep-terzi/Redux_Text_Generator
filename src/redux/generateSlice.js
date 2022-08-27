import { createSlice } from "@reduxjs/toolkit";

export const generatorSlice = createSlice({
  name: "genarator",
  initialState: {
    paragraphs: 4,
    includeHtml: false,
  },
  reducers: {
    setParagraphs: (state, action) => {
      state.paragraphs = action.payload;
    },
    setIncludeHtml: (state, action) => {
      state.includeHtml = action.payload;
    },
  },
});

export const { setParagraphs, setIncludeHtml } = generatorSlice.actions;
export default generatorSlice.reducer;
