import { createSlice } from "@reduxjs/toolkit";
interface FilterOptions{
   
        page_size: number;
        page_number:number;
        search_string: number| string;
        sort_column: number| string;
        sort_order:string;
        categories_ids:number;
        brands_ids:number;
        price_from: number;
        price_to: number;
        waranty_duration_ids:number;
        vendor_id: number
    
}
const initialState = {
    page_size: 30,
    page_number:  1,
    search_string: -1,
    sort_column:  'product_name',
    sort_order: 'ASC',
    categories_ids: -1,
    brands_ids:  -1,
    price_from: 0.00,
    price_to:  100.00,
    waranty_duration_ids:  -1,
    vendor_id:-1
} as FilterOptions;

const ProductFilterSlice = createSlice({
    name: "proFilter",
    initialState,
    reducers: {
    updateProFilter(state,action) {
           
            return {
                ...state,
      [action.payload.name]: action.payload.value
              };

        }
    }
})
export const { updateProFilter } = ProductFilterSlice.actions
export default ProductFilterSlice.reducer;
