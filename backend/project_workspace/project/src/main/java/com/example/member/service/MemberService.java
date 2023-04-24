package com.example.member.service;

import java.util.List;

import com.example.list.dto.ListDTO;
import com.example.member.dto.MemberDTO;
import com.example.member.dto.MemberGenreDTO;

public interface MemberService {
	public List<ListDTO> randomService();
	public void reviewService(String comment);
	public void insertMemGenreProcess(MemberGenreDTO dto);
}
