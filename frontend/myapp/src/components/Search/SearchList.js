import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "assets/css/font.css";
import "assets/css/searchlist.css";
import axios from "axios";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SearchList = () => {
  // 슬라이드 사용하기 위한 선언 모음
  // const imgNumber = 20;
  // const imgWidth = 1280; // The width of each image box in pixels
  // const [position, setPosition] = useState(0);

  // const handlePrevClick = () => {
  //   if (position < 0) {
  //     setPosition(position + imgWidth);
  //   }
  // };

  // const handleNextClick = () => {
  //   const maxPosition = (-(imgNumber - 5) * imgWidth) / 5; // Assuming 5 images are shown at a time
  //   if (position > maxPosition) {
  //     setPosition(position - imgWidth);
  //   }
  // };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const [searchMovie, setSearchMovie] = useState([]);
  const [searchActor, setSearchActor] = useState([]);
  const [searchDirector, setSearchDirector] = useState([]);

  //검색 영화 출력
  const { query } = useParams();

  const noResults = !searchMovie.length && !searchActor.length && !searchDirector.length;
  const [actorsToShow, setActorsToShow] = useState(5);
  const [directorsToShow, setDirectorsToShow] = useState(5);

  useEffect(() => {
    axios
      .get(`http://localhost:8090/search/${query}`)
      .then((response) => {
        setSearchMovie(response.data.searchMovieList);
        setSearchActor(response.data.searchActorList);
        setSearchDirector(response.data.searchDirectorList);
      })
      .catch((error) => {
        console.log(error);
      });

    const preloadImages = async () => {
      const newLoadedImages = await Promise.all(
        searchMovie.map(async (movie) => {
          const src = movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : '/profile1.jpeg';
          const img = new Image();
          img.src = src;
          return img;
        })
      );
      setLoadedImages(newLoadedImages);
    };
    preloadImages();
  }, []);
  
  const handleNextClick = () => {
    if (currentSlide < Math.ceil(searchMovie.length / 5) - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div style={{ width: '100%', height: '100px' }}></div>
      <Container>
        {searchMovie && searchMovie.length > 0 ? (
          <>
            <h3 style={{ fontSize: "25px", padding: "10px", fontWeight: "bold" }}>
              검색된 영화가 {searchMovie.length}건 있습니다.
            </h3>
            <div className="slider">
              {searchMovie.slice(currentSlide * 5, currentSlide * 5 + 5).map((movie, index) => (
                <div className="slide-movie" key={`${movie.movie_id}-${index}`}>
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : "/profile1.jpeg"}
                    alt="Movie Poster"
                    loading="lazy"
                  />
                  <div className="movie-title">{movie.title}</div>
                </div>
              ))}
              <button className="prev_button" onClick={handlePrevClick}>
                <img src={require("assets/img/left.png")}></img>
              </button>
              <button className="next_button" onClick={handleNextClick}>
                <img src={require("assets/img/right.png")}></img>
              </button>
            </div>

            {/* <div className="slide">
              <p>검색된 영화가 {searchMovie.length}건 있습니다.</p>
              <div className="img_set">
                <div
                  className="img_set_set"
                  style={{
                    "--img-set-width": `${imgNumber * imgWidth}px`,
                    "--img-set-position": `${position}px`,
                  }}
                >
                  {searchMovie && searchMovie.slice(0, 20).map((movie, index) => (
                    <div
                      className="slide_movie"
                      key={`${movie.movie_id}-${index}`}
                    >
                      <div className="img_box">
                        <Link to={`/contents/${movie.movie_id}`}>
                          {movie.poster_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                              alt="영화 포스터"
                            />
                          ) : (
                            <img src="\profile1.jpeg" alt="기본 포스터 이미지" />
                          )}
                          <div className="title_box">
                            <div className="title">{movie.title}</div>
                            <div className="date">{movie.release_date} 개봉</div>
                            <div className="rating">★ {(movie.tmdb_vote_sum / 2).toFixed(2)}</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="prev_button" onClick={handlePrevClick}>
                <img src={require("assets/img/left.png")}></img>
              </button>
              <button className="next_button" onClick={handleNextClick}>
                <img src={require("assets/img/right.png")}></img>
              </button>
            </div> */}
          </>
        ) : (
          <>
            <h3 style={{ fontSize: "25px", padding: "10px", fontWeight: "bold" }}>
              영화
            </h3>
            <div className="p-3 text-center">검색된 결과가 없습니다.</div>
          </>
        )}
      </Container>
      <Container>
        <h3 style={{ fontSize: "25px", padding: "10px", fontWeight: "bold", paddingTop:"30px" }}>
          배우
        </h3>
        {searchActor && searchActor.length > 0 ? (
          <>
            <div className="actor-list">
              {searchActor.slice(0, actorsToShow).map((actor, index) => (
                <div key={`${actor.actor_id}-${index}`} className="col-sm-3 col-md-2 profile-img-box">
                  <Link to={`/actorProfile/${actor.actor_id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt="출연진 프로필 사진"
                    />
                    <p className="text-center mt-1 mb-3">{actor.name}</p>
                  </Link>
                </div>
              ))}
            </div>
            {actorsToShow < searchActor.length && (
              <div className="text-center mt-3">
                <div className='more_button' onClick={() => setActorsToShow(actorsToShow + 5)}>More <FontAwesomeIcon icon={faCaretDown}/></div>
              </div>
            )}
          </>
        ) : (<div className="p-3 text-center">검색된 결과가 없습니다.</div>)}
      </Container>
      <Container className="mb-5">
        <h3 style={{ fontSize: "25px", padding: "10px", fontWeight: "bold", paddingTop:"10px" }}>
          감독
        </h3>
        {searchDirector && searchDirector.length > 0 ? (
          <>
            <div className="director-list">
              {searchDirector.slice(0, directorsToShow).map((director, index) => (
                <div key={`${director.director_id}-${index}`} className="col-sm-3 col-md-2 director-img-box">
                  <Link to={`/dirProfile/${director.director_id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${director.profile_path}`}
                    />
                    <p className="text-center pb-2">{director.name}</p>
                  </Link>
                </div>
              ))}
            </div>
            {directorsToShow < searchDirector.length && (
              <div className="text-center mt-3">
                <div className='more_button' onClick={() => setDirectorsToShow(directorsToShow + 5)}>More <FontAwesomeIcon icon={faCaretDown}/></div>
              </div>
            )}
          </>
        ) : (<div className="p-3 text-center">검색된 결과가 없습니다.</div>)}
      </Container>
      {noResults && 
        <div style={{height:'70vh', textAlign:'center', paddingBottom:'-88px'}}>
          <h3 className="mt-5">검색된 결과가 없습니다.</h3>
        </div>
      }
    </>
  );
};

export default SearchList;
