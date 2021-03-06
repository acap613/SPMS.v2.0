package com.revature.spms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.revature.spms.entity.StoryDraft;

@CrossOrigin("http://localhost:4200")
@Repository
public interface StoryRepo extends JpaRepository<StoryDraft, Long> {

}
