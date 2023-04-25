package com.example.list.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.list.dto.ContentsDTO;
import com.example.list.service.ListService;
import com.example.review.dto.CommentDTO;
import com.example.review.dto.RatingDTO;

@CrossOrigin({"http://localhost:3000"})
@RestController
public class ListController {
	
	@Autowired
	private ListService listService;
	
	public ListController() {
		
	}
	
	
	// 메인 리스트
	// http://localhost:8090/
	@GetMapping("/")
	public Map<String, Object> listExecute() {
		Map<String, Object> map = new HashMap<>();
		map.put("topRatedList", listService.getTopRatedMoviesProcess());
		map.put("topRatedClassic", listService.getTopRatedClassicProcess());
		
		return map;
	}
	
	
	
	// 검색
	// http://localhost:8090/search/
	@GetMapping("/search/{query}")
	public Map<String, Object> movieExecute(@PathVariable("query") String query) {
		Map<String, Object> map = new HashMap<>();
		map.put("searchMovieList", listService.searchMovies(query.toUpperCase()));
		map.put("searchActorList", listService.searchActors(query.toUpperCase()));
		map.put("searchDirectorList", listService.searchDirectors(query.toUpperCase()));
		return map;
	}
	
	
	
	// 영화 상세정보
	@GetMapping("/contents/{movie_id}")
	public ContentsDTO contentsExecute(@PathVariable("movie_id") int movie_id) {
		return listService.getContentsProcess(movie_id);
	}
	
	@PostMapping("/comment")
	public void commentExecute(@RequestBody CommentDTO comment) {
		comment.getState(); // t, f가져오기 > 내일할일
		listService.commentProcess(comment);
	}
	
	@PostMapping("/rating")
	public void ratingExecute(@RequestBody RatingDTO rating) {
		listService.ratingProcess(rating);
	}
	
	
	
	
	
	
	
	
	
	
	
}
