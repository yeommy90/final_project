package com.example.list.service;

import java.util.List;

import com.example.list.dto.ListDTO;

public interface ListService {
	public List<ListDTO> getTopRatedMovies();
}
