import { createSlice } from "@reduxjs/toolkit";
interface product {
    loading: true | false;
    error: {} | null;
    called: true | false;
    data: [];
}
const initialState = {
    loading: false,
    error: null,
    data: [],
    called: false,
} as product;

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    add(action, state) {
            alert('add product redux');
            console.log(action, state);
             

        }
    }
})
export const { add } = ProductSlice.actions
export default ProductSlice.reducer;
