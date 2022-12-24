import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "./ThemeSlice";

export default configureStore({
    reducer: {
        theme: ThemeSlice.reducer,
    },
});
