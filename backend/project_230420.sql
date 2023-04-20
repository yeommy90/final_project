SELECT movie_id, title FROM MOVIE WHERE country like '%Korea%';

-- 평점, 인기도, 2000년도 이후
SELECT a.movie_id, a.title, a.release_date, a.tmdb_vote_sum, a.tmdb_vote_cnt, a.poster_path, a.popularity
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 100 AND popularity >= 30 AND release_date >= '00/01/01'
        ORDER BY tmdb_vote_sum DESC) A 
WHERE rownum <= 20;

-- 평점, 인기도, 고전
SELECT a.movie_id, a.title, a.release_date, a.tmdb_vote_sum, a.tmdb_vote_cnt, a.poster_path, a.popularity
FROM (SELECT * 
        FROM movie
        WHERE tmdb_vote_cnt >= 100 AND popularity >= 30 AND release_date <= '00/01/01'
        ORDER BY tmdb_vote_sum DESC) A 
WHERE rownum <= 20;