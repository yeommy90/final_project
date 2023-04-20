-- 회원 테이블
CREATE TABLE member(
    member_id NUMBER CONSTRAINT member_id_seq PRIMARY KEY, --sequence 예정
    email VARCHAR2(50) NOT NULL UNIQUE,
    name VARCHAR2(50) NOT NULL,
    nickname VARCHAR2(50),
    password VARCHAR2(255) NOT NULL,
    profile_path VARCHAR2(1000), --프로필이미지
    gender NUMBER, --1남성2여성
    age NUMBER,
    likes_count NUMBER, --총 좋아요수
    visibility NUMBER, --1공개2비공개
    grade NUMBER,
    regdate date --가입일
);

-- 시퀀스
create sequence member_id_seq
    start with 1
    increment by 1
    nocache
    nocycle;
    
drop sequence member_id_seq;


-- 회원-장르 테이블
CREATE TABLE member_genre(
    member_id number,
    genre_id number
);


-- 영화정보 테이블
create table movie(
     movie_id NUMBER PRIMARY KEY, --tmdb_id
     title varchar2(500),
     original_title varchar2(500),
     release_date date,
     popularity number,
     tmdb_vote_sum number, --이미 저장된 평점
     tmdb_vote_cnt number, --이미 저장된 평점 개수
     vote_sum number, --사용자에게 받는 평점
     vote_cnt number, --사용자에게 받는 평점 개수
     overview varchar2(4000),
     poster_path varchar2(1000),
     backdrop_path varchar2(1000),
     country varchar2(100),
     runtime number
);



-- 감독정보 테이블
create table director(
    director_id number primary key, --tmdb 제공
    name varchar2(200),
    profile_path varchar2(500)
);

-- 배우정보 테이블
create table actor (
    actor_id number primary key, --tmdb 제공
    name varchar2(200),
    profile_path varchar2(500)
);

-- 장르정보 테이블
create table genre(
    genre_id number primary key, --tmdb 제공
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


-- 영화 이미지 테이블
create table movie_images(
    movie_id number,
    filepath varchar2(1000)
);

-- 리뷰 테이블
create table review(
    movie_id number,
    member_id number,
    rating number,
    content varchar2(4000),
    likes number,
    regdate date,
    moddate date,
    state varchar2(2) --1기본2블러3삭제
);

-- 보고싶어요 테이블
create table wish(
    member_id number,
    movie_id number,
    regdate date
);


-- 관리자 테이블 (seq추가하고 회원가입은 email,pass,name으로 받음)
create table admin(
    admin_id number CONSTRAINT admin_id_seq PRIMARY KEY, --sequence 예정
    email varchar2(50),
    password varchar2(255),
    name varchar2(50)
);

-- 시퀀스
create sequence admin_id_seq
    start with 1
    increment by 1
    nocache
    nocycle;
    
drop sequence admin_id_seq;
drop table admin;


---------------------------------------------------------
select count(*) from movie;

select * from movie_actor order by actor_id;



















