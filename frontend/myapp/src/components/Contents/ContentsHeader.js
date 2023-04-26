import CommentModal from 'components/Comment/CommentModal';
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import MovieRating from './MovieRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import CommentDropdown from './CommentDropdown';

const BannerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(6px);
    z-index: 1;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  `;

const ContentsHeader = ({ contents = {}, fetchComments, handleAuthShow, memberReview }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const hasComment = memberReview && memberReview.content;
  const hasRating = memberReview && memberReview.rating;

  const handleCommentClick = () => {
    const memberId = localStorage.getItem('member_id');

    if (!memberId) {
      // 로그아웃 상태일 때: authmodal
      handleAuthShow();
    } else if (hasComment) {
      // 로그인 상태이며 기존 작성 comment가 있을 때: 수정/삭제 드롭다운 메뉴를 보여줍니다.
      setIsDropdownVisible(true);
    } else {
      // 로그인 상태이며 기존 작성 comment가 없을 때: 코멘트 작성 모달창을 보여줍니다.
      handleShow();
    }
  }

  const handleWishClick = () => {
    if (localStorage.getItem('member_id')) {
      
    } else {
      handleAuthShow();
    }
  }

  return (
    <>
      <div fluid className="banner-container">
        <BannerOverlay imageUrl={`https://image.tmdb.org/t/p/original/${contents.backdrop_path}`}></BannerOverlay>
        <img src={`https://image.tmdb.org/t/p/original/${contents.backdrop_path}`} alt="Main centered image" className="banner-image" />
      </div>
      <Container>
        <Row className="my-4">
          <Col md="2">
            <div className="movie-poster-wrapper">
              <img src={`https://image.tmdb.org/t/p/original/${contents.poster_path}`} alt="Movie Poster" className="movie-poster img-fluid" />
            </div>
          </Col>
          <Col md="10">
            <div className='movie-basic p-1 mb-0'>
              <h2>{contents.title}</h2>
              <div className='border-bottom my-1'>
                <span>{contents.release_date} ・ {' '}{contents.genreDTO ? contents.genreDTO.map((genre) => genre.name).join('/') : null} ・ {contents.country}</span>
              </div>
              <div className='border-bottom mt-1'>
                <p>평균 ★ {contents.tmdb_vote_sum}</p>
              </div>
              <Row>
                <MovieRating />
                <div className='header-button d-flex justify-content-between'>
                  <div className="m-2 mr-3" onClick={handleWishClick}>
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    보고싶어요
                  </div>
                  <div className="m-2" onClick={handleCommentClick}>
                    <FontAwesomeIcon icon={faComment} className="mr-2" />
                    코멘트쓰기
                  </div>
                  <CommentDropdown isDropdownVisible={isDropdownVisible} setIsDropdownVisible={setIsDropdownVisible}/>
                </div>
                <CommentModal isOpen={show} onRequestClose={handleClose} movie={contents} fetchComments={fetchComments}/>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContentsHeader;