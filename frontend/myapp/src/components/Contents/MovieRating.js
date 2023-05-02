import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MovieActions } from "reduxs/Actions/MovieAction";

const MovieRating = ({ memberReview, fetchComments }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const dispatch = useDispatch();
  const { movie_id } = useParams();

  const customStarSize = {
    fontSize: '45px',
  };

  const handleRatingChange = (newValue) => {
    const ratingDTO = {
      movie_id: movie_id,
      member_id: localStorage.getItem("member_id"),
      rating: newValue,
    };

    if (memberReview.rating > 0) {
      // 이미 작성된 평점이 있을 때
      dispatch(MovieActions.updateRating(ratingDTO));
    } else {
      // memberReview에 없을 때
      dispatch(MovieActions.postRating(ratingDTO));
    }

    fetchComments();
  }

  useEffect(() => {
    if (memberReview && memberReview.rating) {
      setValue(memberReview.rating);
    }
    //console.log(memberReview.rating);
  }, [memberReview]);

  return (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
          handleRatingChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ ...customStarSize, opacity: 0.55 }} fontSize="inherit" />}
        icon={<StarIcon style={customStarSize} fontSize="inherit" />}
      />
    </Box>
  )
}

export default MovieRating;