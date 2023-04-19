package com.example.member.dto;

import java.sql.Date;

public class MemberDTO {
	private int id;
	private String nickName;
	private String userName;
	private String email;
	private String passWord;
	private String image;
	private int gender;
	private int age;
	private int like_count;
	private int visibility;
	private int grade;
	private Date created_at;
	private String autoRole;
	
	public MemberDTO() {
	
	}
	

	public MemberDTO(String nickName, String userName, String email, String passWord, String image, int gender, int age,
			int like_count, int visibility, int grade, Date created_at) {
		super();
		this.nickName = nickName;
		this.userName = userName;
		this.email = email;
		this.passWord = passWord;
		this.image = image;
		this.gender = gender;
		this.age = age;
		this.like_count = like_count;
		this.visibility = visibility;
		this.grade = grade;
		this.created_at = created_at;
	}





	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getLike_count() {
		return like_count;
	}
	public void setLike_count(int like_count) {
		this.like_count = like_count;
	}
	public int getVisibility() {
		return visibility;
	}
	public void setVisibility(int visibility) {
		this.visibility = visibility;
	}
	public int getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	public String getAutoRole() {
		return autoRole;
	}
	public void setAutoRole(String autoRole) {
		this.autoRole = autoRole;
	}
	
	
	
}
