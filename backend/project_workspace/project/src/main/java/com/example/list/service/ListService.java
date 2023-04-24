package com.example.list.service;

import java.util.List;

import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.ReviewDTO;

public interface ListService {
	public List<ListDTO> getTopRatedMoviesProcess();
	public List<ListDTO> getTopRatedClassicProcess();
	
	public ContentsDTO getContentsProcess(int movie_id);
	
	public void postReviewsProcess(ReviewDTO review);
}
