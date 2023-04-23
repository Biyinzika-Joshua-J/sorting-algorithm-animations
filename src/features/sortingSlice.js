import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    function:'merge-sort',
    sort : false,
    isSorting:false,
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
        updateIsSorting: (state, payload) => {
            state.isSorting = payload.payload.isSorting;
        },
    }
})

export const {updateSortingFuction, updateSortBtnPressed, updateIsSorting} = sorting.actions;

export default sorting.reducer;