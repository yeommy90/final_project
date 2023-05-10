import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieActions } from "reduxs/Actions/MovieAction";

const MemberFavorite = ({ handleAuthShow, fetchComments }) => {
  const dispatch = useDispatch();
  const { movie_id } = useParams();
  const member_id = localStorage.getItem('member_id');
  const memberWish = useSelector((state) => state.movie.memberWish);

  const [value, setValue] = useState(false);

  const handleFavoriteChange = async () => {
    const wishDTO = {
      movie_id: movie_id,
      member_id: member_id,
    }

    console.log("클릭클릭");
    // 로그아웃 상태일 때
    if (!member_id) {
      handleAuthShow();
      return;
    }

    if (value) {
      await dispatch(MovieActions.deleteWish(movie_id, member_id));
    } else {
      await dispatch(MovieActions.postWish(wishDTO));
    }

    setValue(!value);
    fetchComments();
  }

  useEffect(() => {
    if (memberWish && memberWish.member_id) {
      setValue(true);
      console.log(memberWish.member_id);
    }
  }, [memberWish]);

  return (
    <div className="member-favorite">
      <input
        className="form-check-input"
        type="checkbox"
        id="favoriteCheck"
        checked={value}
        onChange={handleFavoriteChange}
        style={{ display: 'none' }}
      />
      <label className="member-favorite-label" htmlFor="favoriteCheck">
        <FontAwesomeIcon icon={faStar} className="mr-2" style={value ? { color: '#fc8080' } : {}}/>
        <span style={value ? { color: '#fc8080' } : {}}>인생영화</span>
      </label>
  </div>
  )
}

export default MemberFavorite;