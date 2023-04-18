import { Button, Container, Modal } from 'reactstrap';
import ProfileHeader from './ProfileHeader';
import UserReviewList from './UserReviewList';
import WishList from './WishList';

const ProfilePage = () => {
  return (
    <div className="page-header section">
      <Container className="d-flex justify-content-center">
        <div className="text-center">
          <ProfileHeader />
          <Button className="btn-round ml-1" color="info" type="button" href="/review">
            <i className="fa fa-heart mr-1" />평가하기
          </Button>
          {/* <MovieReviewModal modal={modal} closeModal={closeModal} /> */}
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