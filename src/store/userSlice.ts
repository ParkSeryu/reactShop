import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20},
    reducers: {
        changeName(state) {
            state.name = 'park';
        },
        addAge(state, action) {
            state.age += action.payload;
        }
    }
})

export let {changeName, addAge, /*addStock*/} = user.actions

export default user;
