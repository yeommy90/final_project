import { useState } from 'react';
import { Button, Container, Modal } from 'reactstrap';
import ProfileHeader from './ProfileHeader';
import MovieReviewModal from './Review/MovieReviewModal';
import UserReviewList from './UserReviewList';
import WishList from './WishList';

const ProfilePage = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="page-header section-dark">
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <ProfileHeader />
          <Button className="btn-round ml-1" color="info" type="button" onClick={openModal}>
            <i className="fa fa-heart mr-1" />평가하기
          </Button>
          <MovieReviewModal modal={modal} closeModal={closeModal} />
          <Button className="btn-round ml-1" color="info" type="button" href="/analysis">
            <i className="fa fa-heart mr-1" />취향분석
          </Button>
          <UserReviewList />
          <WishList />
        </div>
      </Container>
    </div>
  )
}

export default ProfilePage;