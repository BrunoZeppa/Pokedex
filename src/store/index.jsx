import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/user.slice'

export default configureStore({
  reducer: {
    user: userSlice
	}
})