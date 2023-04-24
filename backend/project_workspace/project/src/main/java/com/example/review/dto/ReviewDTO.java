package com.example.review.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReviewDTO {
	private int movie_id;
	private int member_id;
	private Double rating;
	private String content;
	private int likes;
	private Date regdate;
	private Date moddate;
	private String state;
}
