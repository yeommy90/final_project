package com.example.list.dto;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ListDTO {
	private int movie_id;
	private String title;
	private String original_title;
	private Date release_date;
//	private int popularity;
	private Double tmdb_vote_sum;
	private int tmdb_vote_cnt;
//	private Double vote_sum;
//	private int vote_cnt;
//	private String overView;
	private String poster_path;
//	private String backdrop_path;
//	private String country;
//	private int runtime;
	
//	public ListDTO() {
//		// TODO Auto-generated constructor stub
//	}
//
//	public ListDTO(int movie_id, String title, String original_title, Date release_date, Double tmdb_vote_sum,
//			int tmdb_vote_cnt, String poster_path) {
//		super();
//		this.movie_id = movie_id;
//		this.title = title;
//		this.original_title = original_title;
//		this.release_date = release_date;
//		this.tmdb_vote_sum = tmdb_vote_sum;
//		this.tmdb_vote_cnt = tmdb_vote_cnt;
//		this.poster_path = poster_path;
//	}
//
//	public int getMovie_id() {
//		return movie_id;
//	}
//
//	public void setMovie_id(int movie_id) {
//		this.movie_id = movie_id;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public String getOriginal_title() {
//		return original_title;
//	}
//
//	public void setOriginal_title(String original_title) {
//		this.original_title = original_title;
//	}
//
//	public Date getRelease_date() {
//		return release_date;
//	}
//
//	public void setRelease_date(Date release_date) {
//		this.release_date = release_date;
//	}
//
//	public Double getTmdb_vote_sum() {
//		return tmdb_vote_sum;
//	}
//
//	public void setTmdb_vote_sum(Double tmdb_vote_sum) {
//		this.tmdb_vote_sum = tmdb_vote_sum;
//	}
//
//	public int getTmdb_vote_cnt() {
//		return tmdb_vote_cnt;
//	}
//
//	public void setTmdb_vote_cnt(int tmdb_vote_cnt) {
//		this.tmdb_vote_cnt = tmdb_vote_cnt;
//	}
//
//	public String getPoster_path() {
//		return poster_path;
//	}
//
//	public void setPoster_path(String poster_path) {
//		this.poster_path = poster_path;
//	}
//
//	
	
}
