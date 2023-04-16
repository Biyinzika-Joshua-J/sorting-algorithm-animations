import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    function:'merge-sort',
    sort : false,
}

const sorting = createSlice({
    name:'sorter',
    initialState,
    reducers:{
        updateSortingFuction: (state, payload) => {
            state.function = payload.payload.function;
        },
        updateSortBtnPressed: (state, payload) => {
            state.sort = payload.payload.pressed;
        },
    }
})

export const {updateSortingFuction, updateSortBtnPressed} = sorting.actions;

export default sorting.reducer;