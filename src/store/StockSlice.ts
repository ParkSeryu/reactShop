import {createSlice} from "@reduxjs/toolkit";

const StockSlice = createSlice({
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
            state.push(actions.payload);
        }
    }
})

export const {addStock, addState} = StockSlice.actions

export default StockSlice;