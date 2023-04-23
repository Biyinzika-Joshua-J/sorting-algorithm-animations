import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortingSortedArrayError : false,
    selectSortingAlgorithmError:false,
}

const errorSlice = createSlice({
    name:'error',
    initialState,
    reducers: {
        generatingSortedArrayError: (state, payload)=>{
            state.sortingSortedArrayError = payload.payload.data;
        },
        selectSortingAlgorithmError:(state, payload) => {
            state.selectSortingAlgorithmError = payload.payload.data;
        },
    }
})

export const {generatingSortedArrayError, selectSortingAlgorithmError} = errorSlice.actions;
export default errorSlice.reducer;