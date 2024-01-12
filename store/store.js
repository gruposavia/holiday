import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import searchData from "../features/searchData/searchData";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        data: searchData,
    },
});
