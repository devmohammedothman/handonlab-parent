import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseList = [
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 9},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 2},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 3},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 6},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 10},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 8},
    {'img': 'node-1.jpg', 'title': 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    'instructor': 'Maximilian Schwarzmüller', 'rating': 4},
  ];
  currentRate = 7;

  constructor() { }

  ngOnInit() {
  }

}
