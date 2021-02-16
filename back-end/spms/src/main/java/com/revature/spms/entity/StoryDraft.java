package com.revature.spms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "draft")
@Data
public class StoryDraft {
    // fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    long id;

    @Lob
    @Column(name = "text")
    byte[] text;

    @Column(name = "story_pitch_id")
    long storyPitchId;
}
