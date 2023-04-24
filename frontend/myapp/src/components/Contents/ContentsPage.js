import { useEffect } from 'react';
import ContentsHeader from './ContentsHeader';
import BasicInfo from './MovieInfo';
import CastInfo from './CastInfo';
import Comments from './Comments';
import SimilarMovie from './SimilarMovie';

import '../../assets/css/contents.css';
import { useDispatch, useSelector } from 'react-redux';
import { MovieActions } from 'reduxs/Actions/MovieAction';
import { useParams } from 'react-router-dom';

const Contents = () => {
  const dispatch = useDispatch();
  const { movie_id } = useParams();
  const contents = useSelector((state) => state.movie.contents);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(MovieActions.getMovieContents(movie_id));
  }, []);

  return (
    <div className="section">
      <ContentsHeader contents={contents}/>
      <BasicInfo contents={contents}/>
      <CastInfo contents={contents}/>
      <Comments contents={contents}/>
      <SimilarMovie />
    </div>
  )
}

export default Contents;