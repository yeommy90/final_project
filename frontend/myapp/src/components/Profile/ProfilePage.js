import ProfileHeader from './ProfileHeader';
import { useState } from 'react';
import { ProfileAction } from 'reduxs/Actions/ProfileAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileList from './ProfileList';
import style from '../../assets/css/profile.module.css';
import EditImg from 'components/Member/EditImg';
import EditModal from './EditModal';
import '../../assets/css/modal.css';
import EditImgModal from './EditImgModal';
import RecList from './RecList';

const ProfilePage = () => {
  //리스트 선언 모음
  const member_id = localStorage.getItem('member_id');
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.profile.wishList);
  const ratingList = useSelector((state) => state.profile.ratingList);

  useEffect(() => {
    dispatch(ProfileAction.getProfileList(member_id));
  }, []);

  // 로그인 여부를 확인하는 코드
  const isLoggedIn = !!localStorage.getItem('Authorization');

  // 로그인하지 않은 사용자일 경우, /login으로 Redirect 시킨다.
  if (!isLoggedIn) {
    window.location.replace('/Login');
  }

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [editImgShow, setEditImgShow] = useState(false);
  const handleEditImgClose = () => setEditImgShow(false);
  const handleEditImgShow = () => setEditImgShow(true);

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <div className='section'>
          <div className={style.wrap}>
            <ProfileHeader handleEditShow={handleEditShow} handleEditImgShow={handleEditImgShow}/>
            <EditModal isOpen={editShow} onRequestClose={handleEditClose} />
            <EditImgModal isOpen={editImgShow} onRequestClose={handleEditImgClose}/>
          <div style={{ margin: 'auto' }}>
          </div>
            <div style={{ height: '50px' }}></div>
            <p
              style={{
                fontSize: '15pt',
                padding: '10px',
                fontFamily: 'NanumSquare',
                fontWeight: 'bold',
              }}
            >
              평가를 완료한 영화
              <span>
                <a
                  href={`/profilelistmore/rating`}
                  style={{ fontSize: '12pt' }}
                >
                  　더보기
                </a>
              </span>
            </p>
            <ProfileList movies={ratingList} />
            <div style={{ height: '50px' }}></div>
            <p
              style={{
                fontSize: '15pt',
                padding: '10px',
                fontFamily: 'NanumSquare',
                fontWeight: 'bold',
              }}
            >
              보고싶어요
              <span>
                <a style={{ fontSize: '12pt' }} href={`/profilelistmore/wish`}>
                  　더보기
                </a>
              </span>
            </p>
            <ProfileList movies={wishList} />
            <div style={{ height: '150px' }}></div>
            <RecList />
            {/* <MovieList listTitle='보고싶어요' movies={wishList} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
