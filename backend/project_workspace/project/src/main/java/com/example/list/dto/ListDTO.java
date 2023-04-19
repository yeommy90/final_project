package com.example.list.dto;

import java.sql.Date;

public class ListDTO {
	private int movie_id;
	private String title;
	private String original_title;
	private Date release_date;
	private int popularity;
	private int tmdb_vote_sum;
	private int tmdb_vote_cnt;
	private int vote_sum;
	private int vote_cnt;
	private String overView;
	private String poster_path;
	private String backdrop_path;
	private String country;
	private int runtime;
	
	public ListDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public ListDTO(int movie_id, String title, String original_title, Date release_date, int popularity,
			int tmdb_vote_sum, int tmdb_vote_cnt, int vote_sum, int vote_cnt, String overView, String poster_path,
			String backdrop_path, String country, int runtime) {
		super();
		this.movie_id = movie_id;
		this.title = title;
		this.original_title = original_title;
		this.release_date = release_date;
		this.popularity = popularity;
		this.tmdb_vote_sum = tmdb_vote_sum;
		this.tmdb_vote_cnt = tmdb_vote_cnt;
		this.vote_sum = vote_sum;
		this.vote_cnt = vote_cnt;
		this.overView = overView;
		this.poster_path = poster_path;
		this.backdrop_path = backdrop_path;
		this.country = country;
		this.runtime = runtime;
	}
	public int getMovie_id() {
		return movie_id;
	}
	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getOriginal_title() {
		return original_title;
	}
	public void setOriginal_title(String original_title) {
		this.original_title = original_title;
	}
	public Date getRelease_date() {
		return release_date;
	}
	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}
	public int getPopularity() {
		return popularity;
	}
	public void setPopularity(int popularity) {
		this.popularity = popularity;
	}
	public int getTmdb_vote_sum() {
		return tmdb_vote_sum;
	}
	public void setTmdb_vote_sum(int tmdb_vote_sum) {
		this.tmdb_vote_sum = tmdb_vote_sum;
	}
	public int getTmdb_vote_cnt() {
		return tmdb_vote_cnt;
	}
	public void setTmdb_vote_cnt(int tmdb_vote_cnt) {
		this.tmdb_vote_cnt = tmdb_vote_cnt;
	}
	public int getVote_sum() {
		return vote_sum;
	}
	public void setVote_sum(int vote_sum) {
		this.vote_sum = vote_sum;
	}
	public int getVote_cnt() {
		return vote_cnt;
	}
	public void setVote_cnt(int vote_cnt) {
		this.vote_cnt = vote_cnt;
	}
	public String getOverView() {
		return overView;
	}
	public void setOverView(String overView) {
		this.overView = overView;
	}
	public String getPoster_path() {
		return poster_path;
	}
	public void setPoster_path(String poster_path) {
		this.poster_path = poster_path;
	}
	public String getBackdrop_path() {
		return backdrop_path;
	}
	public void setBackdrop_path(String backdrop_path) {
		this.backdrop_path = backdrop_path;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getRuntime() {
		return runtime;
	}
	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}
	
	
}
