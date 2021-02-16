import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryPitch } from 'src/app/models/story-pitch';
import { StoryPitchService } from '../../services/story-pitch.service';

@Component({
  selector: 'app-story-pitch-list',
  templateUrl: './story-pitch-list.component.html',
  styleUrls: ['./story-pitch-list.component.css']
})
export class StoryPitchListComponent implements OnInit {

  pitches: StoryPitch[];
  message: string;
  constructor(
    // data service and router in here
    private service: StoryPitchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshPitches();
  }
  
  refreshPitches(){
    this.service.getAllStoryPitches().subscribe(
      response => {
        console.log(response);
        this.pitches = response;
      }
    )
  }

  addPitch(){
    console.log('button pressed');
    this.router.navigate(['form']);
  }
  
  deletePitch(id){
    console.log(`delete button pressed...Story-pitch with ID ${id} removed`);
    this.service.deletePitch(id).subscribe(
      response => {
        console.log(response);
        this.message = `Story Pitch with ID# ${id} deleted!`;
        this.refreshPitches();
      }
    );
  }

  updatePitch(id){
     console.log(`update button pressed...Story Pitch with ID ${id} updated`);
     this.router.navigate(['form', id]);
  }


}
