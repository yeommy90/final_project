package com.example.wish.dto;

import java.sql.Date;

public class WishDTO {
	private int user_id;
	private int movie_id;
	private Date regDate;
	
	public WishDTO() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	public WishDTO(int user_id, int movie_id, Date regDate) {
		super();
		this.user_id = user_id;
		this.movie_id = movie_id;
		this.regDate = regDate;
	}




	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getMovie_id() {
		return movie_id;
	}
	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	
}
