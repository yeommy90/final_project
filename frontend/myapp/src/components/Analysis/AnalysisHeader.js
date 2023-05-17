import style from '../../assets/css/analysis.module.css';

import { baseUrl } from 'Apiurl';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnalysisHeader = ({ memberInfo = {} }) => {
  const { member_id } = useParams();
  const [ratingCnt, setRatingCnt] = useState([]);

  const save = [...ratingCnt];

  useEffect(() => {
    axios
      .get(`${baseUrl}/analysis/${member_id}`)
      .then((response) => {
        setRatingCnt(response.data.ratingDistribution);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ratingSum =
    save[0] +
    save[1] +
    save[2] +
    save[3] +
    save[4] +
    save[5] +
    save[6] +
    save[7] +
    save[8] +
    save[9];

  return (
    <div style={{ margin: '50px auto 0 auto', width: '700px' }}>
      <div className={style.profile}>
        <div className={style.maintitle}>
          <span style={{ fontWeight: 'bold' }}>{memberInfo && memberInfo.nickname}님</span>의 취향분석
        </div>
        <div className={style.profile_img}>
          <img
            className={style.profile_img_img}
            src={`${process.env.PUBLIC_URL}/profiles/${memberInfo.profile_path}`}
            alt='프로필 이미지'
          />
        </div>{' '}
        {save.length > 0 ? (
          <div className={style.profile_name}>
            현재까지　
            <span
              style={{
                fontSize: '18px',
                textDecoration: 'underline',
                fontWeight: 'bold',
                color: 'white',
                textUnderlineOffset: '10px',
              }}
            >
              {ratingSum}개
            </span>
            　의 평가를 했습니다.
          </div>
        ) : (
          <div className={style.profile_name}>
            현재까지 남긴 평가가 없습니다.
          </div>
        )}
        <div
          style={{
            width: '100%',
            height: '60px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default AnalysisHeader;
