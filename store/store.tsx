import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { Slices } from "./slices";
const combinedReducer = combineReducers({
    proFilter: Slices.ProductFilterSlice,
    updateQuery: Slices.ProQerySlice
});
export const store = configureStore({
    reducer: {

        proFilter: Slices.ProductFilterSlice,
        updateQuery: Slices.ProQerySlice
    }
})
const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        console.log(state,'state');
        
        const nextState = {
            ...state, // use previous state
            proFilter: {
                state:  action.payload,
            },
            updateQuery: {
                state: [...action.payload]
            }
        }
        return nextState;
    } else {
        return combinedReducer(state, action)
    }
}

export const makeStore = () =>
    configureStore({
        reducer: masterReducer,
    });
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const wrapper = createWrapper(makeStore, { debug: true });
export default store;
