import { createSlice } from '@reduxjs/toolkit';

export const isDarkSlice = createSlice({
    name: 'isDark',
    initialState: false,
    reducers: {
        changeIsDark: (state, action) =>{
            return action.payload
        }
    }
})

export const { changeIsDark } = isDarkSlice.actions;

export default isDarkSlice.reducer;
