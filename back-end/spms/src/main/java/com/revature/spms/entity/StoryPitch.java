package com.revature.spms.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="story_pitch")
@Data
public class StoryPitch {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="author_id")
	private Long authorId;
	
	@Column(name="title")
	private String title;
	
	@Column(name="genre")
	private String genre;
	
	@Column(name="tag")
	private String tag;
	
	@Column(name="description")
	private String description;
	
	@Column(name="date_created")
	private Date dateCreated;
	
	@Column(name="last_updated")
	private Date lastUpdated;
	
	@Column(name="completion_date")
	private Date completionDate;
	
	@Column(name="word_count")
	private int wordCount;	
	
	@Column(name="approved")
	private char approved;
	
	@Column(name="on_hold")
	private char onHold;
	
	@Column(name="completed")
	private char completed;
}
