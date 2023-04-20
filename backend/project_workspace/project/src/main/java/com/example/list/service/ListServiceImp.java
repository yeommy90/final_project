package com.example.list.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.list.dao.ListDAO;
import com.example.list.dto.ListDTO;

@Service
public class ListServiceImp implements ListService {
	
	@Autowired
	private ListDAO listDAO;
	
	@Override
	public List<ListDTO> getTopRatedMovies() {
		return listDAO.getTopRatedMovies();
	}

}
