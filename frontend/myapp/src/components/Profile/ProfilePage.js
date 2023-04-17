import { useState } from 'react';
import { Button, Container, Modal } from 'reactstrap';

const ProfilePage = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="page-header section-dark">
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <h2 className='mb-3'>프로필 페이지</h2>
          <Button className="btn-round ml-1" color="info" type="button" onClick={toggleModal}>
            <i className="fa fa-heart mr-1" />
            평가하기
          </Button>
          {/* Modal */}
          <Modal isOpen={modal} toggle={toggleModal}>
            <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={toggleModal}
              >
                <span aria-hidden={true}>×</span>
              </button>
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Rate Movies
              </h5>
            </div>
            <div className="modal-body">
              {/* Add a list of movies and rating input here */}
              <ul>
                <li>
                  Movie 1
                  <input type="number" min="0" max="10" placeholder="Rate 0-10" />
                </li>
                <li>
                  Movie 2
                  <input type="number" min="0" max="10" placeholder="Rate 0-10" />
                </li>
                {/* Add more movies as needed */}
              </ul>
            </div>
            <div className="modal-footer">
              <div className="left-side">
                <Button
                  className="btn-link"
                  color="default"
                  type="button"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              </div>
              <div className="divider" />
              <div className="right-side">
                <Button className="btn-link" color="danger" type="button">
                  Submit Ratings
                </Button>
              </div>
            </div>
          </Modal>
          <Button className="btn-round ml-1" color="info" type="button" href="/analysis">
            <i className="fa fa-heart mr-1" />
            취향분석
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default ProfilePage;