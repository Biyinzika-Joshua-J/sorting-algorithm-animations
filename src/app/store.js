import { configureStore } from "@reduxjs/toolkit";
import {barsReducer ,themeReducer, sorterReducer} from "../features/index";


export const store = configureStore({
    reducer:{
        bars: barsReducer,
        theme:themeReducer,
        sorter:sorterReducer,
    }
})