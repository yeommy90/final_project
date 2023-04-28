import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const MovieRating = ({ memberReview }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const customStarSize = {
    fontSize: '45px',
  };

  const handleRatingClick = () => {
    
  }

  useEffect(() => {
    if (memberReview && memberReview.rating) {
      setValue(memberReview.rating);
    }
    console.log(memberReview.rating);
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