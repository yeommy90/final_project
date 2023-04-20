import axios from 'axios';
import { baseUrl } from '../../Apiurl';
import { boardReducers } from '../reducers/listReducer';

// dispatch를 매개변수로 주면 내부에서 바로 사용 가능

// list action
function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/board/list/${currentPage}`, {cache:false})
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    dispatch(boardReducers.getBoardList({data}));
  };
}

// view action > 뭔가 뭔가 겹치는 작업이 많음..
function getBoardDetail(num, config) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/board/view/${num}`, config)
      .then((res) => res.data);
    dispatch(boardReducers.getBoardDetail({data}));
  };
}

// upload 저장 action
// stream을 통해서 받을때는 blob으로 선언
function getBoardDownload(upload) {
  return async () => {
    // controller return이 void이면 변수 선언 안해도됨
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, { responseType: 'blob' })
      .then((res) => res.data);
      // dispatch(boardActions.getBoardDownload(data)); // store에 저장
      return data; // view에서만 사용
  };
}

// delete action
function getBoardDelete(num, config) {
  return async () => {
    await axios.delete(`${baseUrl}/board/delete/${num}`, config).then((res) => res.data);
  };
}

// write action
function getBoardWrite(formData, config) {
  return async () => {
    await axios.post(`${baseUrl}/board/write`, formData, config)
      .then((res) => res.data);
  };
}

// update action
function getBoardUpdate(formData, config) {
  return async () => {
    await axios.put(`${baseUrl}/board/update`, formData, config)
      .then((res) => res.data);
  }
}

export const boardActions = { getBoardList, getBoardDetail, getBoardDownload, getBoardDelete, getBoardWrite, getBoardUpdate };