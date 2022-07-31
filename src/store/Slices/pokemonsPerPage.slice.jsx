import { createSlice } from '@reduxjs/toolkit';

export const pokemonsPerPageSlice = createSlice({
    name: 'pokemonsPerPage',
    initialState: 20,
    reducers: {
        setPokemonsPerPage: (state, action) =>{
           return action.payload
        }
    }
})

export const { setPokemonsPerPage } = pokemonsPerPageSlice.actions;

export default pokemonsPerPageSlice.reducer;
