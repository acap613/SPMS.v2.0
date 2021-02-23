package com.revature.spms.controller;

import com.revature.spms.entity.StoryPitch;
import com.revature.spms.service.StoryPitchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/story-pitch")
public class StoryPitchController {


    @Autowired
    StoryPitchService service;

    // get all
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public List<StoryPitch> getAllPitches(){
        return this.service.getAllStoryPitches();
    }

    // get one
    @RequestMapping(value = "/get/{id}", method=RequestMethod.GET)
    public StoryPitch getPitchById(@PathVariable long id) {
        return this.service.getStoryPitchById(id);
    }

    // create new
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public StoryPitch createNewPitch(@RequestBody StoryPitch storyPitch) {
        System.out.println("created story pitch called");
        return this.service.addStoryPitch(storyPitch);
    }

    // update general (temporary)
    @RequestMapping(value = "/edit/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public StoryPitch editStoryPitch(@RequestBody StoryPitch storyPitch, @PathVariable long id) {

        return this.service.editStoryPitch(storyPitch, id);
    }

    // update Author update
    @RequestMapping(value = "author/{username}/edit/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public StoryPitch editStoryPitch(@RequestBody StoryPitch storyPitch,@PathVariable String username, @PathVariable long id) {

        return this.service.editStoryPitch(storyPitch, username, id);
    }

    // update Editor update

//    @RequestMapping(value = "editor/edit/{id}", method = RequestMethod.PUT)
//    @ResponseBody
//    public StoryPitch editStoryPitch(@RequestBody StoryPitch storyPitch, @PathVariable long id) {
//
//        return this.service.editStoryPitch(storyPitch, id);
//    }

    // delete
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteStoryPitch(@PathVariable long id) {
        this.service.deleteStoryPitch(id);
    }

}
