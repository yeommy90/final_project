import CommentModal from 'components/Comment/CommentModal';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import '../../assets/css/commentmodal.css';
import styled from 'styled-components';

const ContentsHeader = ({ contents = {} }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <div>
                <Button className='my-2' color="primary">보고싶어요</Button>
                <Button className='m-2' color="secondary" onClick={handleShow}>코멘트</Button>
                <CommentModal isOpen={show} onRequestClose={handleClose} movie={contents}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContentsHeader;