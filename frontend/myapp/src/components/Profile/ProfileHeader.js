import { faHeart, faPen, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

const ProfileHeader = ({handleEditShow, handleEditImgShow}) => {
  const profile_path = localStorage.getItem("profile_path");
  const member_id = localStorage.getItem('member_id');
  const grade = localStorage.getItem('grade');

  let gradeImgPath = "";
  switch (grade) {
    case 6:
      gradeImgPath = "석탄1.png";
      break;
    case 5:
      gradeImgPath = "철2.png";
      break;
    case 4:
      gradeImgPath = "금3.png";
      break;
    case 3:
      gradeImgPath = "에메랄드4.png";
      break;
    case 2:
      gradeImgPath = "루비5.png";
      break;
    case 1:
      gradeImgPath = "다이아몬드6.png";
      break;
    default:
      gradeImgPath = "석탄1.png";
      break;
  }

  let gradeText = "";
  switch (grade) {
    case 6:
      gradeText = "당신은 석탄 등급입니다.";
      break;
    case 5:
      gradeText = "당신은 철 등급입니다.";
      break;
    case 4:
      gradeText = "당신은 금 등급입니다.";
      break;
    case 3:
      gradeText = "당신은 에메랄드 등급입니다.";
      break;
    case 2:
      gradeText = "당신은 루비 등급입니다.";
      break;
    case 1:
      gradeText = "당신은 다이아몬드 등급입니다.";
      break;
    default:
      gradeText = "당신은 석탄 등급입니다.";
      break;
  }

  return (
    <>
      <div style={{ margin: 'auto' }}>
        <div
          style={{
            width: '1100px',
            margin: 'auto',
            textAlign: 'center',
            height: '550px',
            backgroundColor: '#343A40',
            paddingTop: '120px',
          }}
        >
          <div style={{ margin: 'auto' }}>
            <div
              style={{
                marginBottom: '30px',
                fontSize: '25pt',
                color: 'white',
                fontFamily: 'NanumSquare',
                letterSpacing: '3px',
              }}
            >
              😀WELCOME😀
            </div>
            <div
              className='profile_img'
              style={{
                margin: 'auto',
                width: '80px',
                height: '80px',
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={`${process.env.PUBLIC_URL}/profiles/${profile_path}`}
                  alt='프로필 이미지'
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8%',
                    border: '1px solid black',
                  }}
                />
              </div>
            </div>

            <div
              className='profile_name'
              style={{
                marginTop: '10px',
                fontSize: '13pt',
                color: 'white',
                fontFamily: 'NanumSquare',
                letterSpacing: '3px',
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/gradeimg/${gradeImgPath}`}
                alt="grade"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontWeight: 'bold', color: 'white' }}>{localStorage.nickname ? (
              <>{`${localStorage.getItem("nickname")} 님의 페이지`}</>
                ) : (
                  <>아무개 님의 페이지</>
                )}</span>
                <FontAwesomeIcon 
                  icon={faPencil}
                  style={{
                    marginLeft: '5px',
                    color: 'white',
                  }}
                  onClick={() => handleEditImgShow()}
                />
            </div>
            <div
              className="grede_name"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "10pt",
                color: "white",
                fontFamily: "NanumSquare",
                letterSpacing: "3px",
              }}
            >
              <span style={{ fontWeight: "bold", color: "white" }}>
                {gradeText}
              </span>
            </div>
            <div
              style={{
                marginTop: '50px',
                width: '100%',
                height: '40px',
                // backgroundColor: 'blue',
              }}
            >
              <div
                style={{
                  width: 'auto',
                  height: '40px',
                  margin: 'auto',
                  // backgroundColor: 'green',
                }}
              >
                <Button
                  className='btn-round bg-dark'
                  type='button'
                  href='/review'
                >
                  <FontAwesomeIcon icon={faHeart} />
                  평가하기
                </Button>
                <Button
                  className='btn-round bg-dark'
                  type='button'
                  href={`/analysis/${member_id}`}
                  style={{ margin: '0px 20px' }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  취향분석
                </Button>
                <Button
                  onClick={() => handleEditShow()}
                  className='btn-round bg-dark'
                  type='button'
                >
                  <FontAwesomeIcon icon={faHeart} />
                  정보수정
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
