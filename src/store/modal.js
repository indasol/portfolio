import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: '모달리듀서',
    initialState: {
        isModal: false,
        text: '',
        subject:''
    },
    reducers:{
        modalOpen: (state, action)=>{
            state.isModal = true;  // true 열기
            state.text = action.payload.text;  // 공지내용
            state.subject = action.payload.subject;  // 제목
        },
        modalClose: (state, action)=>{
            state.isModal = false;  // 닫기
        }
    }
});
export default modal.reducer;
export const {modalOpen, modalClose} = modal.actions;
