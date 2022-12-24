import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "Pagination",
    initialState: {
        theme: "light",
    },
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
        },
    },
});

export const action = ThemeSlice.actions;
