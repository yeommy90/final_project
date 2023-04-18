import { Button, Col, Container, Row } from 'reactstrap';
import '../../assets/css/contents.css';
import { useEffect } from 'react';

const Contents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="section">
      <div fluid className="banner-container">
        <div className='banner-overlay'></div>
        <img src={require('assets/img/5LWF3lOtEZ08JPGFH3kc1g.jpg')} alt="Main centered image" className="banner-image" />
      </div>
      <Container>
        <Row className="my-4">
          <Col md="2">
            <div className="movie-poster-wrapper">
              <img src={require('assets/img/9XDeIclRe6SdKDknD_aGWg.jpg')} alt="Movie Poster" className="movie-poster img-fluid" />
            </div>
          </Col>
          <Col md="9">
            <div className='movie-basic'>
              <h2>스즈메의 문단속</h2>
              <div style={{borderBottom:'1px solid #dbdbdb'}}>
                <span>2022 ・ 애니메이션/모험/액션 ・ 일본</span>
              </div>
              <div style={{borderBottom:'1px solid #dbdbdb'}}>
                <p>평균 ★ 4.5</p>
              </div>
              <div>
                <Button color="primary">보고싶어요</Button>
                <Button color="secondary">코멘트</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <div className='movie-detail' style={{borderBottom:'1px solid #dbdbdb'}}>
              <h3>기본정보</h3>
              <p>すずめの戸締まり</p>
              <p>2022 · 일본 · 애니메이션</p>
              <p>2시간 1분 · 12세</p>
              <p>“이 근처에 폐허 없니? 문을 찾고 있어” 규슈의 한적한 마을에 살고 있는 소녀 ‘스즈메’는 문을 찾아 여행 중인 청년 ‘소타’를 만난다. 그의 뒤를 쫓아 산속 폐허에서 발견한 낡은 문. 스즈메가 무언가에 이끌리듯 문을 열자 마을에 재난의 위기가 닥쳐오고 가문 대대로 문 너머의 재난을 봉인하는 소타를 도와 간신히 문을 닫는다.
                “닫아야만 하잖아요, 여기를!” 재난을 막았다는 안도감도 잠시, 수수께끼의 고양이 ‘다이진’이 나타나 소타를 의자로 바꿔 버리고 일본 각지의 폐허에 재난을 부르는 문이 열리기 시작하자 스즈메는 의자가 된 소타와 함께 재난을 막기 위한 여정에 나선다.
                “꿈이 아니었어” 규슈, 시코쿠, 고베, 도쿄. 재난을 막기 위해 일본 전역을 돌며 필사적으로 문을 닫아가던 중 어릴 적 고향에 닿은 스즈메는 잊고 있던 진실과 마주하게 되는데…</p>
            </div>
            {/* Add basic information here */}
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <h3>Production Crew Information</h3>
            {/* Add production crew information here */}
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <h3>Comment List</h3>
            {/* Add comment list here */}
            
          </Col>
          <Button color="info">더보기</Button>
        </Row>

        <Row className="my-4">
          <Col>
            <h3>List of Similar Works</h3>
            {/* Add list of similar works here */}
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Contents;