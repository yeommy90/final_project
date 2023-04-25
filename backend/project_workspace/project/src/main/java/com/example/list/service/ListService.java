package com.example.list.service;

import java.util.List;

import com.example.actor.dto.ActorDTO;
import com.example.director.dto.DirectorDTO;
import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.CommentDTO;
import com.example.review.dto.RatingDTO;

public interface ListService {
	public List<ListDTO> getTopRatedMoviesProcess();
	public List<ListDTO> getTopRatedClassicProcess();
	
	// 검색 영역
	public List<ListDTO> searchMovies(String query);
	public List<ActorDTO> searchActors(String query);
	public List<DirectorDTO> searchDirectors(String query);
	
	// 영화 상세 페이지
	public ContentsDTO getContentsProcess(int movie_id);
	
	// review > comment, rating
	public void commentProcess(CommentDTO comment);
	public void ratingProcess(RatingDTO rating);
	
}
