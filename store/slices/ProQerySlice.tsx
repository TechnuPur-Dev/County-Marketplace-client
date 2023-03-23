import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk<Response, string>(
    'fetchData',
    async (payload) => {


        try {
            
            console.log(payload, 'loadd');
            const response = await fetch(`http://countydev92-001-site1.ftempurl.com/api/marketplace/getProductsFiltered?${payload}`);
            const data = await response.json();
            console.log(data, 'loadd');

            return data.payload;

        } catch (error: any) {
            return error;
        }
    }
);

const ProQuerySlice = createSlice({
    name: "proFilter",
    initialState:{},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, state => {
                console.log(state);
                return state

            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log(state, action, 'loadd');
                state=action.payload
                return state
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log(state);

            });
    }

})

export default ProQuerySlice.reducer;
