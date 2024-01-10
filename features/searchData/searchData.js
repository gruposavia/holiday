// slices/searchDataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    portCodes: [],
    portNames: [],
    // Add more state properties as needed
  },
  reducers: {
    setPortCodes: (state, action) => {
      state.portCodes = action.payload;
    },
    setPortNames: (state, action) => {
      state.portNames = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setPortCodes, setPortNames } = searchDataSlice.actions;
export default searchDataSlice.reducer;
