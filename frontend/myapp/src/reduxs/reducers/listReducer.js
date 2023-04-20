import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  boardList : [],
  pv: {currentPage:1},
  boardDetail: {},
  boardFile: null, // 굳이 저장할 필요는 없음 > view에서만 쓰이기 때문에
};

const boardSlice = createSlice({
  name : 'board', initialState,

  reducers: {
    // action 값 사용하지 않고 바로 함수 호출
    // action에는 백엔드에서 넘어온 값이 저장
    getBoardList(state, action) {
      state.boardList = action.payload.data.aList;
      state.pv = action.payload.data.pv;
    },

    // view reducer
    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },

    // upload > state에 저장하지 않아도됨
    getBoardDownload(state, action) {
      state.boardFile = action.payload.data;
    },
  },
});

// 함수 자동 완성 가능
export const boardReducers = boardSlice.actions; // boardSlice.action.getBoardList
export default boardSlice.reducer;