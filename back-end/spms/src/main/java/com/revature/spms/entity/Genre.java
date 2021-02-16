package com.revature.spms.entity;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Entity
@Table(name = "genre")
@Data
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // points to story pitch
    @Column(name = "genre_name")
    private String genreName;

    @ManyToMany(mappedBy = "genres", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Editor> editors = new HashSet<>();

}
