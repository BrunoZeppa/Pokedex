import { configureStore } from '@reduxjs/toolkit';
import isDarkSlice from './Slices/isDark.slice';
import userSlice from './Slices/user.slice';

export default configureStore({
  reducer: {
    user: userSlice, 
    isDark: isDarkSlice
	}
})