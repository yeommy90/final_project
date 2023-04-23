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
SELECT m.movie_id, m.title, m.release_date, m.tmdb_vote_sum, m.tmdb_vote_cnt, m.overview, m.poster_path, m.backdrop_path, m.country, m.runtime, 
    d.name, d.profile_path
FROM movie m
JOIN movie_director md ON m.movie_id = md.movie_id
JOIN director d ON md.director_id = d.director_id
WHERE m.movie_id = 129;

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



