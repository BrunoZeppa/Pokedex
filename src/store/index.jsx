import { configureStore } from '@reduxjs/toolkit';
import isDarkSlice from './Slices/isDark.slice';
import isLoadingSlice from './Slices/isLoading.slice';
import pokemonsPerPageSlice from './Slices/pokemonsPerPage.slice';
import suggestionSearchSlice from './Slices/suggestionSearch.slice';
import userSlice from './Slices/user.slice';

export default configureStore({
  reducer: {
    user: userSlice, 
    isDark: isDarkSlice,
    pokemonsPerPage: pokemonsPerPageSlice,
    suggestionSearch: suggestionSearchSlice,
    isLoading: isLoadingSlice
	}
})