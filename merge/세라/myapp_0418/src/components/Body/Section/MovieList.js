import React, { useState } from 'react';

const imgNumber = 30;
const imgWidth = 200; // The width of each image box in pixels

function setImg() {
  return (
    <>
      <div
        style={{
          height: 'auto',
          width: 'auto',
          float: 'left',
          marginLeft: '10px',
        }}
      >
        <div className='img_box'>
          <Link to="/contents">
          <img
            src='https://an2-img.amz.wtchn.net/image/v2/tkmsakQ3xtdo7JXj6Gogqw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5UZzRPREF6TXpjeU5qY3dNREkxTXpraWZRLjU3cGhtemxyblpFdW5jU1BfZy1ycUhNU1VjV19WTDlLSjJITmh3anJPVWM'
            style={{ marginBottom: '10px' }}
          />
          </Link>
        </div>
        {/* 영화 타이틀 */}
        <div
          className='titlebox'
          style={{
            marginBottom: '30px',
          }}
        >
          <div
            className='movie_title'
            style={{
              paddingTop: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            시멘틱에러 더무비
          </div>

          <div
            className='movie_date'
            style={{ paddingTop: '1px', fontSize: '14px' }}
          >
            2023.03 개봉
          </div>
          <div
            className='movie_rating'
            style={{ paddingTop: '1px', fontSize: '15px', color: '#fc8080' }}
          >
            ★ 5.0
          </div>
        </div>
      </div>
    </>
  );
}

function setImgBox() {
  const imgBoxArray = [];
  for (let i = 0; i < imgNumber; i++) {
    imgBoxArray.push(setImg());
  }
  return imgBoxArray;
}

function MovieList() {
  const [position, setPosition] = useState(0);

  const handlePrevClick = () => {
    if (position < 0) {
      setPosition(position + imgWidth);
    }
  };

  const handleNextClick = () => {
    const maxPosition = -(imgNumber - 5) * imgWidth; // Assuming 5 images are shown at a time
    if (position > maxPosition) {
      setPosition(position - imgWidth);
    }
  };

  return (
    <>
      {/* 이미지셋 */}
      <div
        className='img_set'
        style={{
          width: '100%',
          height: '450px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 이미지박스 */}
        {/* left값으로 위치 변경 할 수 있음 */}
        <div
          className='img_set_set'
          style={{
            width: `${imgNumber * imgWidth}px`,
            height: '100%',
            position: 'absolute',
            left: `${position}px`, // Set the initial position of the img_set_set element
            transition: 'left 0.5s ease-in-out', // Add a CSS transition for smooth animation
          }}
        >
          {setImgBox()}
        </div>
      </div>
      <button onClick={handlePrevClick}>이전</button>
      <button onClick={handleNextClick}>다음</button>
    </>
  );
}

export default MovieList;
