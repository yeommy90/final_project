import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { MovieActions } from 'reduxs/Actions/MovieAction';

Modal.setAppElement('#root'); // 이 부분은 루트 요소를 설정합니다. 이 예에서는 index.html에 있는 'root' 요소입니다.

const CommentModal = ({ isOpen, onRequestClose, movie = {}, fetchComments }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [isSpoiler, setIsSpoiler] = useState(false);
  
  const handleSubmit = (e) => {
    console.log('아이디', localStorage.getItem("member_id"));
    console.log(isSpoiler);
    e.preventDefault();

    const commentDTO = {
      movie_id : movie.movie_id,
      member_id : localStorage.getItem("member_id"),
      content : comment,
      isSpoiler,
    };

    dispatch(MovieActions.postComment(commentDTO));
    onRequestClose();
    setComment('');
    setIsSpoiler(false);
    fetchComments();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comment"
      className="CommentModal"
      overlayClassName="CommentOverlay"
    >
      {movie && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="ml-4 mt-4" style={{ fontWeight: 'bold' }}>{movie.title}</h5>
            <button aria-label="Close" className="close mr-4 mt-2" type="button" onClick={onRequestClose}>
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-2">
              <textarea 
                className="form-control border-0" 
                rows="15" 
                placeholder="이 작품에 대한 생각을 자유롭게 남겨주세요" 
                value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="spoilerCheck" 
                  checked={isSpoiler === 2}
                  onChange={(e) => setIsSpoiler(e.target.checked ? 2 : 1)} />
                <label className="form-check-label d-flex" htmlFor="spoilerCheck">
                  <FontAwesomeIcon icon={faCloudShowersHeavy} size="2x"/>
                  <div className='spolier ml-2'>스포일러 방지</div>
                </label>
              </div>
              <button className="btn btn-primary mr-4 mb-3" type="submit">Write</button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default CommentModal;
