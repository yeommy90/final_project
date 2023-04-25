package com.example.list.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.actor.dto.ActorDTO;
import com.example.director.dto.DirectorDTO;
import com.example.list.dao.ListDAO;
import com.example.list.dto.ContentsDTO;
import com.example.list.dto.ListDTO;
import com.example.review.dto.CommentDTO;
import com.example.review.dto.RatingDTO;
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
	
	
	// 검색 영역
	@Override
	public List<ListDTO> searchMovies(String query) {
		return listDAO.searchMovies(query);
	}

	@Override
	public List<ActorDTO> searchActors(String query) {
		return listDAO.searchActors(query);
	}

	@Override
	public List<DirectorDTO> searchDirectors(String query) {
		return listDAO.searchDirectors(query);
	}
	

	// 영화 상세 컨텐츠
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

	
	// 영화 코멘트
	@Override
	@Transactional
	public void commentProcess(CommentDTO comment) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("movie_id", comment.getMovie_id());
		map.put("member_id", comment.getMember_id());
		
		ReviewDTO review = listDAO.findReviewById(map);
		
		// 이미 작성한 review가 있다면
		if (review != null) {
			// 기존 작성 review에 rating만 있다면 > comment가 없다면
			if (review.getContent() == null) {
				listDAO.updateComment(comment);
			} else {
				throw new IllegalArgumentException("A comment already exists for this movie.");
			}
		} else {
			// 새 review일때
			listDAO.postComment(comment);
		}
	}

	@Override
	public void ratingProcess(RatingDTO rating) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("movie_id", rating.getMovie_id());
		map.put("member_id", rating.getMember_id());
		
		ReviewDTO review = listDAO.findReviewById(map);
		
		// 이미 작성한 rating이 있다면
		if (review != null) {
			listDAO.updateRating(rating);
		} else {
			listDAO.postRating(rating);
		}
	}



}
