import ReactModal from "react-modal";
import '../../../assets/css/modal.css';

ReactModal.setAppElement('#root');

const MovieReviewModal = ({ modal, closeModal }) => {
  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={closeModal}
      contentLabel="평가하기"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-header">
        <button aria-label="Close" className="close" type="button" onClick={closeModal}>
          <span aria-hidden={true}>×</span>
        </button>
        <h5 className="modal-title text-center" id="exampleModalLabel">평가하기</h5>
      </div>
      <div className="modal-body">
        <ul>
          {/* 사용자가 별점을 남길 수 있는 영화 리스트 아이템 컴포넌트 */}
          <li>Movie 1
            <input type="number" min="0" max="10" placeholder="Rate 0-10" />
          </li>
          <li>Movie 2
            <input type="number" min="0" max="10" placeholder="Rate 0-10" />
          </li>
        </ul>
      </div>
    </ReactModal>
  );
};

export default MovieReviewModal;
