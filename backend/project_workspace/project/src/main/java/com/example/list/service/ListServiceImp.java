package com.example.list.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.list.dao.ListDAO;
import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.ReviewDTO;

@Service
public class ListServiceImp implements ListService {
	
	@Autowired
	private ListDAO listDAO;
	
	@Override
	public List<ListDTO> getTopRatedMoviesProcess() {
		return listDAO.getTopRatedMovies();
	}

	@Override
	public List<ListDTO> getTopRatedClassicProcess() {
		return listDAO.getTopRatedClassic();
	}

	@Override
	public ContentsDTO getContentsProcess(int movie_id) {
		ContentsDTO contents = listDAO.getMovieById(movie_id);
		contents.setActorDTO(listDAO.getActorsByMovieId(movie_id));
		contents.setDirectorDTO(listDAO.getDirectorsByMovieId(movie_id));
		contents.setGenreDTO(listDAO.getGenresByMovieId(movie_id));
		contents.setImagesDTO(listDAO.getImagesByMovieId(movie_id));
		contents.setReviewDTO(listDAO.getReviewsByMovieId(movie_id));
		return contents;
	}

	@Override
	public void postReviewsProcess(ReviewDTO review) {
		if (review.getRating() == null) {
		    review.setRating(0.0);
		}
		listDAO.postReviews(review);
	}



}
