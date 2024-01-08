import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [

    { id: 1, name: "Flights", icon: "icon-tickets" },
    { id: 2, name: "Manage Booking", icon: "icon-bed" },
    { id: 3, name: "Check-in", icon: "icon-destination" },
    { id: 4, name: "Flight Status", icon: "icon-ski" },
  ],
  currentTab: "Flights",
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
