package com.revature.spms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.revature.spms.entity.Test;


@Repository
public interface TestRepo extends JpaRepository<Test, Long> {

}
