/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { boolean: false },
  reducers: {
    toggler(state) {
      state.boolean = !state.boolean;
    },
  },
});

export const { toggler } = toggleSlice.actions;
export default toggleSlice.reducer;
