import style from '../../assets/css/profile.module.css';

//인생영화
const Favorite = ({ memberInfo, memberFavorite }) => {

  return (
    <>
      <div className={style.favorite_wrap}>
        <div className={style.app}>
          <div className={style.poster}>
            <img src={`https://image.tmdb.org/t/p/w300/${memberFavorite.poster_path}`} />
          </div>
        </div>
        <div className={style.app2}>
          <p style={{ fontSize: '18pt' }}>
            <span style={{ fontWeight: 'bold' }}>{memberInfo && memberInfo.nickname}</span> 님의 인생영화
          </p>
          <div
            className='divline'
            style={{
              width: '100%',
              height: '1px',
              borderBottom: '1px solid black',
            }}
          ></div>
          <p style={{ fontSize: '14pt' }}>{memberFavorite && memberFavorite.title}</p>
          <div
            className='divline'
            style={{
              width: '100%',
              height: '1px',
              borderBottom: '1px solid black',
            }}
          ></div>
          <p style={{ fontSize: '9pt' }}>
            {memberFavorite.release_date} ・ {memberFavorite.country}
          </p>
          <div
            className='divline'
            style={{
              width: '100%',
              height: '1px',
              borderBottom: '1px solid black',
            }}
          ></div>
          <p style={{ fontSize: '14pt' }}>TMDB ★ {(memberFavorite.tmdb_vote_sum / 2).toFixed(2)}・ 부귀영화 ★ {memberFavorite.vote_sum}</p>
        </div>
      </div>
    </>
  );
};

export default Favorite;
