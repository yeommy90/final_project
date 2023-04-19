package com.example.admin.dto;

public class AdminDTO {
	private String admin_id;
	private String passWord;
	private String admin_name;
	private String autoRole;
	public AdminDTO() {
		// TODO Auto-generated constructor stub
	}

	public AdminDTO(String admin_id, String passWord) {
		super();
		this.admin_id = admin_id;
		this.passWord = passWord;
	}

	public String getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(String admin_id) {
		this.admin_id = admin_id;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getAdmin_name() {
		return admin_name;
	}

	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}

	public String getAutoRole() {
		return autoRole;
	}

	public void setAutoRole(String autoRole) {
		this.autoRole = autoRole;
	}
	
	
	
	
}
