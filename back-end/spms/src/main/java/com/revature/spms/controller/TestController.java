package com.revature.spms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.spms.dao.TestRepo;
import com.revature.spms.entity.Test;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TestController {

	@Autowired
	TestRepo repo;
	
	@RequestMapping(value="/test/all", method= RequestMethod.GET)
	public List<Test> getTestInfo() {
		return this.repo.findAll();
	}
}
