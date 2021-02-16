package com.revature.spms.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "editor")
@Data
public class Editor {

    @ManyToMany(cascade = CascadeType.ALL)
    //@JsonManagedReference
    @JoinTable(
            name = "editor_genres",
            joinColumns = @JoinColumn(name = "editor_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    public Set<Genre> genres = new HashSet<>();
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "points_allowed")
    private int points_allowed;
    @Column(name = "is_assistant")
    private char is_assistant;
    @Column(name = "is_senior")
    private char is_senior;
    @Column(name = "is_general")
    private char is_general;

}
