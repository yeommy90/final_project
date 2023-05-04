import { Link } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap';
import likes from '../../assets/img/likes.svg';
import profiePic from '../../assets/img/180c6e128821941b1.jpg';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Comments = ({ contents, handleAuthShow }) => {
  const comments = Array.isArray(contents.reviewDTO) ? contents.reviewDTO : [];
  const memberLikes = useSelector((state) => state.movie.memberLikes);

  const [likedComments, setLikedComments] = useState(memberLikes);
  const member_id = localStorage.getItem('member_id');

  useEffect(() => {
    setLikedComments(memberLikes);
    console.log(memberLikes);
  }, [memberLikes]);

  const isCommentLiked = (comment_member_id) => {
    return likedComments.hasOwnProperty(comment_member_id);
  };
  
  const handleLikesClick = () => {
    if (localStorage.getItem('member_id')) {
      
    } else {
      handleAuthShow();
    }
  }

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <h3>코멘트</h3>
              <Link to="/comment" style={{paddingRight:'20px'}}>More</Link>
            </div>
              {comments && comments.length > 0 ? (comments
                .filter((comment) => comment.content && comment.content.trim() !== '')
                .map((comment) => (
                <div key={comment.member_id} className="comment-box bg-light p-3 mb-3">
                  <div className="d-flex align-items-center">
                    <img src={profiePic} className="profile-pic rounded-circle mx-3"/>
                    <div className="ml-2">
                      <div className="mt-2">{comment.member_id}</div>
                      <p>★ {comment.rating !== 0 ? comment.rating : '평가없음'}</p>
                    </div>
                  </div>
                  <p className="text-justify ml-2 mt-3 mb-5">{comment.content}</p>
                  <div className="d-flex justify-content-between">
                    <span>
                      <FontAwesomeIcon icon={faHeart} className="mr-2" style={isCommentLiked(comment.member_id) ? { color: '#fc8080' } : {}}/>
                      <span className="pt-2 pl-1">{comment.likes}</span>
                    </span>
                    {comment.member_id != member_id && (
                      <button className="btn btn-primary" onClick={() => handleLikesClick(comment.member_id)}>Like</button>
                    )}
                  </div>
                </div>
              ))) : (<p className="d-flex justify-content-center py-5">작성된 코멘트가 없습니다.</p>)}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Comments;