package com.example.list.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.list.service.ListService;

@RestController
public class ListController {
	
	@Autowired
	private ListService listService;
	
	public ListController() {
		
	}
	
	// http://localhost:8090/
	@GetMapping("/")
	public Map<String, Object> listExecute() {
		Map<String, Object> map = new HashMap<>();
		map.put("topRatedList", listService.getTopRatedMovies());
		
		return map;
	}
}
