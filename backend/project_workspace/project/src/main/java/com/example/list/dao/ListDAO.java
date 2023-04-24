package com.example.list.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.actor.dto.ActorDTO;
import com.example.director.dto.DirectorDTO;
import com.example.genre.dto.GenreDTO;
import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ImagesDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.ReviewDTO;

@Mapper
@Repository
public interface ListDAO {
	public List<ListDTO> getTopRatedMovies();
	public List<ListDTO> getTopRatedClassic();
	
	public ContentsDTO getMovieById(int movie_id);
	public List<GenreDTO> getGenresByMovieId(int movie_id);
	public List<DirectorDTO> getDirectorsByMovieId(int movie_id);
	public List<ActorDTO> getActorsByMovieId(int movie_id);
	public List<ImagesDTO> getImagesByMovieId(int movie_id);
	public List<ReviewDTO> getReviewsByMovieId(int movie_id);
	
	public void postReviews(ReviewDTO review);
	
}
