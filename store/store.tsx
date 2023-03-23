import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Slices } from "./slices";
export const store = configureStore({
    reducer: {
      
        proFilter: Slices.ProductFilterSlice,
        updateQuery:Slices.ProQerySlice
    }
    })
    export type AppDispatch = typeof store.dispatch;
    export const useAppDispatch: () => AppDispatch = useDispatch;
    
    export default store;
