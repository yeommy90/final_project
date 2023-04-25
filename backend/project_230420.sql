SELECT movie_id, title FROM MOVIE WHERE country like '%Korea%';

-- 평점, 인기도, 2000년도 이후
SELECT a.movie_id, a.title, a.release_date, round(a.tmdb_vote_sum, 2), a.tmdb_vote_cnt, a.poster_path
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 100 AND popularity >= 30 AND release_date >= '00/01/01'
        ORDER BY tmdb_vote_sum DESC) A 
WHERE rownum <= 20;

-- 평점, 인기도, 고전
SELECT a.movie_id, a.title, a.release_date, round(a.tmdb_vote_sum, 2), a.tmdb_vote_cnt, a.poster_path
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 100 AND popularity >= 30 AND release_date <= '00/01/01'
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
SELECT g.genre_id, g.name, COUNT(r.rating) AS rating_count, AVG(r.rating) AS average_rating, ((sum(r.rating) / (COUNT(r.rating) * 5)) * 100) AS total
        FROM
            genre g
        JOIN
            movie_genre mg ON g.genre_id = mg.genre_id
        JOIN
            review r ON r.movie_id = mg.movie_id
        WHERE
            r.member_id = 1
        GROUP BY
            g.genre_id,
            g.name
        ORDER BY
            rating_count DESC,
            total DESC;















