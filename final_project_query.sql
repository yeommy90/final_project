-- 회원 테이블
CREATE TABLE member(
    id NUMBER PRIMARY KEY,
    nickname VARCHAR2(50) NOT NULL,
    username VARCHAR2(50) NOT NULL,
    email VARCHAR2(50) NOT NULL UNIQUE,
    password VARCHAR2(255) NOT NULL,
    image VARCHAR2(100) NOT NULL, 
    gender NUMBER,
    age NUMBER,
    likes_count NUMBER,
    pub NUMBER,
    grade NUMBER,  
    created_at date
);

-- 영화정보 테이블
create table movie(
     movie_id NUMBER PRIMARY KEY,
     title varchar2(200),
     original_title varchar2(200),
     release_date date,
     popularity number,
     tmdb_vote_sum number,
     tmdb_vote_cnt number,
     vote_sum number,
     vote_cnt number,
     overview varchar2(4000),
     poster_path varchar2(2000),
     backdrop_path varchar2(2000)
);

-- 감독정보 테이블
create table director(
    director_id number primary key,
    name varchar2(200)
);

-- 배우정보 테이블
create table actor (
    actor_id number primary key,
    name varchar2(200)
);

-- 장르정보 테이블
create table genre(
    genre_id number primary key,
    name varchar2(200)
);

-- 영화-감독 테이블
create table movie_director(
    movie_id number,
    director_id number
);

-- 영화-배우 테이블
create table movie_actor(
    movie_id number,
    actor_id number
);

-- 영화-장르 테이블
create table movie_genre(
    movie_id number,
    genre_id number
);



-- 관리자 테이블
create table admin(
    admin_id varchar2(50),
    password varchar2(100)
);

-- 영화 이미지 테이블
create table movie_images(
    movie_id number,
    filename varchar2(4000),
    filepath varchar2(4000)
);

-- 리뷰 테이블
create table review(
    user_id number,
    movie_id number,
    rating number,
    content varchar2(300),
    likes number,
    regdate date,
    moddate date,
    state varchar2(2) 
);

-- 보고싶어요 테이블
create table wish(
    user_id number,
    movie_id number,
    regdate date
);

