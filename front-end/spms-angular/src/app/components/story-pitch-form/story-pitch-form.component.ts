import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Genre } from 'src/app/models/genre';
import { StoryPitch } from 'src/app/models/story-pitch';
import { StoryType } from 'src/app/models/story-type';
import { GenreService } from 'src/app/services/genre.service';
import { StoryPitchFormService } from 'src/app/services/story-pitch-form.service';

@Component({
  selector: 'app-story-pitch-form',
  templateUrl: './story-pitch-form.component.html',
  styleUrls: ['./story-pitch-form.component.css']
})
export class StoryPitchFormComponent implements OnInit {
     
     id: number;
     authorId: number;
     title: string;
     genre: Genre;
     tag: string;
     description: string;
     points:number;
     dateCreated: Date;
     lastUpdated: Date;
     completionDate: Date;
     approved: string;
     onHold: string;
     completed: string;
     storyType: StoryType; 

  pitch: StoryPitch;
  genres: Genre[];

   message = 'Select';
  pointValueSelected = 0;
  
  // genreSelected = new FormControl();

  forWordCount = [
    { noWords: '--Select Word Count (approx.)---', pointValue: 0},
    { noWords: '50,000+', pointValue: 50},
    { noWords: '20,000-49,999', pointValue: 25},
    { noWords: '2,000-19,999', pointValue: 10},
    { noWords: '1,999 or less', pointValue: 5}
  ]

  // genres= [
  //   { name: 'Action/Adventure', value: 'adventure', tableId: 11 },
  //   { name: 'Autobiography', value: 'autobiography', tableId: 1},
  //   { name: 'Biography', value: 'biography', tableId: 2 },
  //   { name: 'Comic/Graphic Novel', value: 'manga', tableId: 9},
  //   { name: 'Essay', value: 'fantsay', tableId: 3 }, 
  //   { name: 'Fantasy', value: 'fantsay', tableId: 3 }, 
  //   { name: 'History', value: 'history', tableId: 10 },
  //   { name:'Horror', value: 'horror', tableId: 5 }, 
  //   { name: 'Literary Fiction/Drama', value: 'drama', tableId: 7 },
  //   { name: 'Mystery', value: 'mystery', tableId: 6 },
  //   { name: 'Romance', value: 'romance', tableId: 8 },      
  //   { name: 'Science Fiction', value: 'sci-fi', tableId: 4 }
    
    
  
  constructor(
    private fb: FormBuilder,
    private service: StoryPitchFormService,
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.pitch = new StoryPitch(this.id, this.authorId, this.title,
                                this.genre, this.tag, this.description,
                                this.points, new Date(), this.lastUpdated,
                                this.completionDate, 'N', 'N',
                                'N', this.storyType);
   
    this.generateGenreList();
  }

  saveStoryPitchForm() {
    console.log("submit button pressed");
    console.log("Starting new form...");
    console.log("testing points saved: " + this.points)
    this.service.createPitch(this.pitch).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['list']);
      }
    );
  //  if(this.book_id == -1){
  //     console.log("Starting new form...")
  //     this.service.createPitch(this.pitch).subscribe(
  //       data => {
  //         console.log(data);
  //         this.router.navigate(['list']);
  //       }
  //     );
  //   } else {
  //     console.log("something else is happening...")
  //     this.service.updatePitch(this.author_id, this.book_id, this.pitch)
  //   }  
    
  //   console.log("it didnt work")
  } 

  selectPointsByWordCount(event: any) {
    this.pointValueSelected = event.target.value;
    this.pitch.points = parseInt(event.target.value);
    console.log("points set at " + (this.pitch.points));

    
  }

  // setPointsValue(pointsValue: number){
  //   this.points = pointsValue;
  // }

  selectGenre(event: any){    
    this.genre = event.target.value;    
    console.log(this.genre);
  }

  generateGenreList(){
    this.genreService.getGenreList().subscribe(
      data => {
        console.log(data);
        this.genres = data;
      }
    )
  }

  selectDate(event) {
    this.completionDate = event.target.value;
    console.log(this.completionDate)
  }
  
}
