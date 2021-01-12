import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = 'Pepperoni Pizza';

  tests: Test[];

  constructor(private service: TestService) { }

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

}
