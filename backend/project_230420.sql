SELECT movie_id, title FROM MOVIE WHERE country like '%Korea%';

-- 평점, 인기도, 2000년도 이후
SELECT a.movie_id, a.title, a.release_date, round(a.tmdb_vote_sum / 2, 2), a.tmdb_vote_cnt, a.poster_path
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 3000 AND popularity >= 150 AND release_date >= '20/01/01'
        ORDER BY tmdb_vote_sum DESC) A 
WHERE rownum <= 20;

-- 평점, 인기도, 고전
SELECT a.movie_id, a.title, a.release_date, round(a.tmdb_vote_sum, 2), a.tmdb_vote_cnt, a.poster_path
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 200 AND popularity >= 30 AND release_date <= '00/01/01'
        ORDER BY tmdb_vote_sum DESC) A 
WHERE rownum <= 20;

-- contents
SELECT movie_id, title, EXTRACT(YEAR FROM release_date) as release_date, round(tmdb_vote_sum, 2) as tmdb_vote_sum, overview, poster_path, backdrop_path, country, runtime
		FROM movie WHERE movie_id = 129;

-- genre
SELECT g.name
FROM movie_genre mg
JOIN genre g ON mg.genre_id = g.genre_id
WHERE mg.movie_id = 129;

-- director
SELECT d.name, d.profile_path
FROM director d
JOIN movie_director md ON d.director_id = md.director_id
WHERE md.movie_id = 129;

-- actor
SELECT a.name, a.profile_path
FROM actor a
join movie_actor ma ON a.actor_id = ma.actor_id
where ma.movie_id = 129 AND a.profile_path IS NOT NULL;

-- images
SELECT mi.filepath
FROM movie m
join movie_images mi ON m.movie_id = mi.movie_id
where m.movie_id = 129;

-- comment
insert into review values (129, 1, 4.5, null, 0, sysdate, sysdate, 1);
update review set content = '별론데요' where member_id = 1;
select * from review;
commit;

SELECT movie_id, member_id, rating FROM review WHERE movie_id = 129 AND member_id = 1;

--이게 무야~~~
SELECT g.genre_id, g.name, COUNT(r.rating) AS rating_count, Round(AVG(r.rating),2) AS average_rating, ((sum(r.rating) / (COUNT(r.rating) * 5)) * 100) AS total
        FROM
            genre g
        JOIN
            movie_genre mg ON g.genre_id = mg.genre_id
        JOIN
            review r ON r.movie_id = mg.movie_id group by g.genre_id, g.name
        WHERE
            r.member_id = 1
        GROUP BY
            g.genre_id,
            g.name
        ORDER BY
            rating_count DESC,
            total DESC;

-- 하나의 영화 > 코멘트 리스트 가져오기
SELECT c.movie_id, c.member_id, c.content, COALESCE(r.rating, 0) AS rating, c.likes, c.state, c.regdate, m.nickname, m.profile_path
FROM comments c
LEFT OUTER JOIN rating r ON r.movie_id = c.movie_id AND r.member_id = c.member_id
JOIN member m ON m.member_id = c.member_id
WHERE c.movie_id = 361743
ORDER BY likes DESC;

-- 사용자가 남긴 코멘트, 별점 가져오기
SELECT COALESCE(c.movie_id, r.movie_id) AS movie_id,
       COALESCE(c.member_id, r.member_id) AS member_id,
       c.content,
       COALESCE(r.rating, 0) AS rating,
       c.likes,
       c.state,
       c.regdate
FROM rating r
FULL OUTER JOIN comments c ON c.movie_id = r.movie_id AND c.member_id = r.member_id
WHERE (c.movie_id = 129 AND c.member_id = 1) OR (r.movie_id = 129 AND r.member_id = 1);

commit;

insert into comments values (129, 1, '재밌네요...', 0, sysdate, sysdate, 1);

select count(*) from movie;

delete from director2 where profile_path is null;
delete from director where tmdb_vote_cnt <= 30;
delete from movie_images;

DELETE FROM movie_director
WHERE director_id NOT IN (SELECT director_id FROM director);

DELETE FROM movie_actor
WHERE actor_id NOT IN (SELECT actor_id FROM actor);

select * from movie where movie_id = 361743;
select * from director where name = 'Jon Favreau';
select * from actor where actor_id = 2;

select * from movie where movie_id = 212778;
update movie set popularity = 100 where movie_id = 766507;

commit;

select * from wish where member_id = 1 order by regdate DESC;

-- 중복 필드 제외 삽입
INSERT INTO director
SELECT * FROM director2
WHERE director_id NOT IN (SELECT director_id FROM director);

-- 중복 필드 삭제
DELETE FROM movie_director a
WHERE ROWID > (SELECT MIN(ROWID) FROM movie_director b
WHERE b.director_id = a.director_id AND b.movie_id = a.movie_id);

SELECT * FROM 
			(SELECT * FROM movie ORDER BY dbms_random.value)
		WHERE ROWNUM BETWEEN 0 AND 4;


-- 비슷한 영화 쿼리
WITH matched_genres AS (
  SELECT movie_id, COUNT(*) AS genre_count
  FROM movie_genre
  WHERE genre_id IN (
    SELECT genre_id
    FROM movie_genre
    WHERE movie_id = 299536
  )
  AND movie_id <> 299536
  GROUP BY movie_id
),
matched_directors AS (
  SELECT movie_id, COUNT(*) AS director_count
  FROM movie_director
  WHERE director_id IN (
    SELECT director_id
    FROM movie_director
    WHERE movie_id = 299536
  )
  AND movie_id <> 299536
  GROUP BY movie_id
),
matched_actors AS (
  SELECT movie_id, COUNT(*) AS actor_count
  FROM movie_actor
  WHERE actor_id IN (
    SELECT actor_id
    FROM movie_actor
    WHERE movie_id = 299536
  )
  AND movie_id <> 299536
  GROUP BY movie_id
),
combined AS (
  SELECT m.*, COALESCE(g.genre_count, 0) + (3 * COALESCE(d.director_count, 0)) + COALESCE(a.actor_count, 0) AS similarity_score
  FROM movie m
  LEFT JOIN matched_genres g ON m.movie_id = g.movie_id
  LEFT JOIN matched_directors d ON m.movie_id = d.movie_id
  LEFT JOIN matched_actors a ON m.movie_id = a.movie_id
  WHERE m.movie_id <> 299536
  ORDER BY similarity_score DESC, m.release_date DESC
)
SELECT *
FROM combined
WHERE ROWNUM <= 12;


-- likes
SELECT *
FROM likes
WHERE movie_id = 361743 AND member_id = 1;

SELECT *
FROM comments
WHERE (movie_id = 361743 AND member_id = 9) AND (state IN (2, 3, 4));

UPDATE comments
SET STATE = 4
WHERE MOVIE_ID = 361743 AND MEMBER_ID = 9 AND STATE = 2;
        
commit;

select * from movie where movie_id in (select favorite from member where member_id = 1);













