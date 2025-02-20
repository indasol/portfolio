import { createSlice } from "@reduxjs/toolkit";

const count = createSlice({
    name: '카운트리듀서',
    initialState: {
        cnt: 0
    },
    reducers:{
        increment: (state, action)=>{
            state.cnt = state.cnt + 1;
            console.log( state.cnt );
        },
        decrement: (state, action)=>{
            state.cnt = state.cnt - 1;
        }
    }
});
export default count.reducer;
export const {increment, decrement} = count.actions;
