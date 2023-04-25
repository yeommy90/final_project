import { useEffect, useState } from 'react';
import ContentsHeader from './ContentsHeader';
import BasicInfo from './MovieInfo';
import CastInfo from './CastInfo';
import Comments from './Comments';
import SimilarMovie from './SimilarMovie';

import '../../assets/css/contents.css';
import { useDispatch, useSelector } from 'react-redux';
import { MovieActions } from 'reduxs/Actions/MovieAction';
import { useParams } from 'react-router-dom';
import ContentsImage from './ContentsImage';

const Contents = () => {
  const dispatch = useDispatch();
  const { movie_id } = useParams();
  const [comments, setComments] = useState([]);

  const contents = useSelector((state) => state.movie.contents);
  
  const fetchComments = async () => {
    const fetchedComments = await dispatch(MovieActions.getMovieContents(movie_id));
    setComments(fetchedComments);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchComments();
  }, []);

  return (
    <div className="section">
      <ContentsHeader contents={contents} fetchComments={fetchComments}/>
      <BasicInfo contents={contents}/>
      <CastInfo contents={contents}/>
      <Comments contents={contents} />
      <ContentsImage contents={contents}/>
      <SimilarMovie />
    </div>
  )
}

export default Contents;