import {configureStore} from '@reduxjs/toolkit';
import user from './store/userSlice'
import stockSlice from './store/stockSlice'


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stockSlice.reducer
    }
});