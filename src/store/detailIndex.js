import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from 'react-router-dom';

const detailIndex = createSlice({
     name: '포트폴리오인덱스리듀서',
     initialState: {
          detailIndex: 0
     },
     reducers:{
          setDetailIndex: (state, action)=>{
               console.log(action.payload)
               state.detailIndex = action.payload;
               localStorage.setItem("detailIndex", action.payload);
               console.log( "detainIndex.js" + state.detailIndex );
          },
          getDetailIndex: (state, action)=>{
               return state.detailIndex ;
          },
          getStateDetailIndex: (state, action)=>{
               console.log("getStateDetailIndex " +  action.payload )
               state.detailIndex = action.payload;
          }
     }
});

export default detailIndex.reducer;
export const {setDetailIndex, getDetailIndex, getStateDetailIndex} = detailIndex.actions;
