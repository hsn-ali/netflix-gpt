import {createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGpt: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGpt = !state.showGpt
        }
    }
});

export const {toggleGptSearchView} = GptSlice.actions;

export default GptSlice.reducer;