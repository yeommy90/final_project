import axios from 'axios';
import { baseUrl } from '../../Apiurl';
import { MovieReducers } from '../Reducers/MovieReducer';

// dispatch를 매개변수로 주면 내부에서 바로 사용 가능

// 메인 페이지 리스트
function getMovieList() {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/`, {cache:false})
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    dispatch(MovieReducers.getMovieList({data}));
  };
}

// 영화 상세정보 콘텐츠
function getMovieContents(movie_id) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/contents/${movie_id}`)
      .then((res) => res.data);
    dispatch(MovieReducers.getMovieContents({data}));
  };
}

// 사용자가 남긴 리뷰 가져오기
function getReviewByMemberId(movie_id, member_id) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/comment/${movie_id}/${member_id}`)
      .then((res) => res.data);
    dispatch(MovieReducers.getReviewByMemberId({data}));
  }
}

// 코멘트
function postComment(commentDTO) {
  return async () => {
    await axios.post(`${baseUrl}/comment`, commentDTO)
      .then((res) => res.data);
  }
}

function updateComment(commentDTO) {
  return async () => {
    await axios.put(`${baseUrl}/comment`, commentDTO)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

function deleteComment(movie_id, member_id) {
  return async () => {
    await axios.delete(`${baseUrl}/comment/${movie_id}/${member_id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

// 별점
function postRating(ratingDTO) {
  return async () => {
    await axios.post(`${baseUrl}/rating`, ratingDTO)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

function updateRating(ratingDTO) {
  return async () => {
    await axios.put(`${baseUrl}/rating`, ratingDTO)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

function deleteRating(movie_id, member_id) {
  return async () => {
    await axios.delete(`${baseUrl}/rating/${movie_id}/${member_id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

// 보고싶어요
function getWishByMemberId(movie_id, member_id) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/wish/${movie_id}/${member_id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    dispatch(MovieReducers.getWishByMemberId({data}));
  }
}

function postWish(wishDTO) {
  return async () => {
    await axios.post(`${baseUrl}/wish`, wishDTO)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

function deleteWish(movie_id, member_id) {
  return async () => {
    await axios.delete(`${baseUrl}/wish/${movie_id}/${member_id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

// 코멘트 좋아요
function getLikesByMemberId(movie_id, member_id) {
  return async (dispatch) => {
    const data = await axios.get(`${baseUrl}/likes/${movie_id}/${member_id}`)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    dispatch(MovieReducers.getLikesByMemberId({data}));
  }
}


export const MovieActions = { getMovieList, getMovieContents, getReviewByMemberId, postComment, updateComment, deleteComment, postRating, updateRating, deleteRating, getWishByMemberId, postWish, deleteWish, getLikesByMemberId };