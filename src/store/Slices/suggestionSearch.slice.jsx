import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const suggestionSearchSlice = createSlice({
    name: 'suggestionSearch',
    initialState: [],
    reducers: {
        setSuggestionSearch: (state, action) =>{
            const suggestionSearch = action.payload
            return suggestionSearch
        }

    }
})

export const getSuggestionThunk = (pokemonSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?name=${pokemonSearch}/`)
        .then(() => dispatch(res => setSuggestionSearch(res.data?.results.slice(0,4))))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setSuggestionSearch } = suggestionSearchSlice.actions;

export default suggestionSearchSlice.reducer;
