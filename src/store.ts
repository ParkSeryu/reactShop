import {configureStore} from '@reduxjs/toolkit';
import user from './store/userSlice'
import stockSlice from './store/StockSlice'


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stockSlice.reducer
    }
});