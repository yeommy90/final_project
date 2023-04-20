package com.example.list.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.list.dto.ListDTO;

@Mapper
@Repository
public interface ListDAO {
	public List<ListDTO> getTopRatedMovies();
	
	
}
