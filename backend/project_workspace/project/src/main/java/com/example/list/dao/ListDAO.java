package com.example.list.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.actor.dto.ActorDTO;
import com.example.director.dto.DirectorDTO;
import com.example.genre.dto.GenreDTO;
import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ImagesDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.CommentDTO;
import com.example.review.dto.RatingDTO;
import com.example.review.dto.ReviewDTO;

@Mapper
@Repository
public interface ListDAO {
	public List<ListDTO> getTopRatedMovies();
	public List<ListDTO> getTopRatedClassic();
	
	//검색 영역
	public List<ListDTO> searchMovies(String query);
	public List<ActorDTO> searchActors(String query);
	public List<DirectorDTO> searchDirectors(String query);
	
	// 영화 상세 페이지
	public ContentsDTO getMovieById(int movie_id);
	public List<GenreDTO> getGenresByMovieId(int movie_id);
	public List<DirectorDTO> getDirectorsByMovieId(int movie_id);
	public List<ActorDTO> getActorsByMovieId(int movie_id);
	public List<ImagesDTO> getImagesByMovieId(int movie_id);
	public List<ReviewDTO> getReviewsByMovieId(int movie_id);
	
	// review > comment, rating
	public void postComment(CommentDTO comment);
	public void updateComment(CommentDTO comment);
	public void postRating(RatingDTO rating);
	public void updateRating(RatingDTO rating);
	public ReviewDTO findReviewById(Map<String, Object> map);
}
