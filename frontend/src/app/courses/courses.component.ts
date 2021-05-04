import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  lado = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.lado = !this.lado;
  }

}
