import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  tabs: [

    { id: 1, name: "flights", icon: "icon-tickets",  },
    { id: 2, name: "booking", icon: "icon-bed" },
    { id: 3, name: "check-in", icon: "icon-destination",},
    { id: 4, name: "status", icon: "icon-ski" },
  ],
  currentTab: "flights",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
