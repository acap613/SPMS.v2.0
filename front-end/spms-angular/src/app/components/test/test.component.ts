import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { Test } from 'src/app/models/test';
import { GenreService } from 'src/app/services/genre.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = 'Pepperoni Pizza';

  tests: Test[];
  genres: Genre[];

  constructor(private service: TestService,
              private genreService: GenreService) { }

  ngOnInit(): void {
  }

  testCheck(){
    console.log("Check Works!");
    this.service.getTestInfo().subscribe(
      data => {
        this.tests = data;
      }
    );
  }

  genreTest(){
    this.genreService.getGenreList().subscribe(
      data => {
        console.log(data);
        this.genres = data;
      }
    )
  }

}
