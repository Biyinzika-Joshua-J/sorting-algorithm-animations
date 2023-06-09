import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light', // its light, true => its dark.
}

const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers:{
        toggleDarkLightTheme : (state, payload) => {
            state.mode = payload.payload.data;
        },
        changeTheme : (state, payload) => {
            state.mode = payload.payload.data;
        }
    }
})

export const { toggleDarkLightTheme, changeTheme,  } = themeSlice.actions;

export default themeSlice.reducer;