import { createSlice } from "@reduxjs/toolkit";

interface FilterOptions {

    page_size: number | string;
    page_number: number | string;
    search_string: number | string;
    sort_column: number | string;
    sort_order: string | number;
    categories_ids: number | string;
    brands_ids: number | string;
    price_from: number | string;
    price_to: number | string;
    waranty_duration_ids: number | string;
    vendor_id: number | string

}
const initialState = {
    page_size: 30,
    page_number: 1,
    search_string: -1,
    sort_column: 'product_name',
    sort_order: 'ASC',
    categories_ids: -1,
    brands_ids: -1,
    price_from: 0.00,
    price_to: 100.00,
    waranty_duration_ids: -1,
    vendor_id: -1
} as FilterOptions;

const ProductFilterSlice = createSlice({
    name: "proFilter",
    initialState,
    reducers: {
        updateProFilter(state, action) {
            console.log(action, 'routerr', state);

            state = action.payload
            return state


        }
    }
})
export const { updateProFilter } = ProductFilterSlice.actions
export default ProductFilterSlice.reducer;
