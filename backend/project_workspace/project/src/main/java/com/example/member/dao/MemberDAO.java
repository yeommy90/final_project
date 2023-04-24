package com.example.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.list.dto.ListDTO;
import com.example.member.dto.MemberDTO;
import com.example.member.dto.MemberGenreDTO;

@Mapper
@Repository
public interface MemberDAO {
	public List<ListDTO> printRandom();
	public void review(String comment);
	public void insertMemGenre(MemberGenreDTO dto);
}
