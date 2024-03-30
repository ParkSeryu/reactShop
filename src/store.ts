import {ActionReducerMapBuilder, configureStore, createSlice} from '@reduxjs/toolkit';

const user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {}
})

const stock = createSlice({
    name: 'stock',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1}
    ],
    reducers: {}
})


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer
    }
});