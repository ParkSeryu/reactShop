import {createSlice} from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: 'stock',
    initialState: [
        {id: 0, name: 'White and Black', content: 'test', count: 2},
        {id: 2, name: 'Grey Yordan', content: 'qwer', count: 1}
    ],
    reducers: {
        addStock(state, actions) {
            state.map(ele => (
                ele.id === actions.payload ? ele.count += 1 : {}
            ))
        },
        addState(state, actions) {
            console.log('test')
            return [...state, actions.payload];
        }
    }
})

export const {addStock, addState} = stockSlice.actions

export default stockSlice;