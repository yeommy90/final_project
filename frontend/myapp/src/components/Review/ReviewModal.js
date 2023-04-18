import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 이 부분은 루트 요소를 설정합니다. 이 예에서는 index.html에 있는 'root' 요소입니다.

const ReviewModal = ({ show, handleClose }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      contentLabel="평가하기"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-header">
        <button aria-label="Close" className="close" type="button" onClick={handleClose}>
          <span aria-hidden={true}>×</span>
        </button>
        <h5 className="modal-title text-center" id="exampleModalLabel">상세정보</h5>
      </div>
      <div className="modal-body">
        <p>영화 제목: 살인자의 기억법</p>
        <p>개봉 연도: 2016</p>
        <p>국가: 한국</p>
        <p>감독: 김태균</p>
        <p>출연: 서인국, 나문희, 김성균</p>
        <p>
          줄거리: 살인사건의 유일한 증인이 된 여자가, 자신이 목격한 살인범의 얼굴을
          잊어버리는 질병에 걸리자, 살인범을 찾아내기 위해 노력하는 사건을 그린 스릴러
          영화입니다.
        </p>
      </div>
    </Modal>
  );
};

export default ReviewModal;
