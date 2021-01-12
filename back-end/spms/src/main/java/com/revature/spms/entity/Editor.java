package com.revature.spms.entity;

import java.util.*;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="editor")
@Getter
@Setter
public class Editor {

	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="points_allowed")
	private int points_allowed;
	
	@Column(name="is_assistant")
	private char is_assistant;
	
	@Column(name="is_senior")
	private char is_senior;
	
	@Column(name="is_general")
	private char is_general;
	
	
	@ManyToMany(cascade = CascadeType.ALL)
	//@JsonManagedReference
	@JoinTable(
			name = "editor_genres", 
			joinColumns = @JoinColumn(name="editor_id"), 
			inverseJoinColumns = @JoinColumn(name="genre_id")
	)
	public Set<Genre> genres = new HashSet<>();
	
}
