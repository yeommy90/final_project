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
import com.example.review.dto.ReviewDTO;

@CrossOrigin({"http://localhost:3000"})
@RestController
public class ListController {
	
	@Autowired
	private ListService listService;
	
	public ListController() {
		
	}
	
	// http://localhost:8090/
	@GetMapping("/")
	public Map<String, Object> listExecute() {
		Map<String, Object> map = new HashMap<>();
		map.put("topRatedList", listService.getTopRatedMoviesProcess());
		map.put("topRatedClassic", listService.getTopRatedClassicProcess());
		
		return map;
	}
	
	// 영화 상세정보
	@GetMapping("/contents/{movie_id}")
	public ContentsDTO contentsExecute(@PathVariable("movie_id") int movie_id) {
		return listService.getContentsProcess(movie_id);
	}
	
	@PostMapping("/review")
	public void reviewExecute(@RequestBody ReviewDTO review) {
		System.out.println(review);
		listService.postReviewsProcess(review);
	}
	
}
