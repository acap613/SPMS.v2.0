package com.revature.spms.entity;


import java.util.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="genre")
public class Genre {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id; // points to story pitch
	@Column(name="genre")
	private String genre;
	
	@ManyToMany(mappedBy= "genres", cascade = CascadeType.ALL)
	@JsonBackReference
	private Set<Editor> editors = new HashSet<>();	

}
