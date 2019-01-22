import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbRatingModule
  ],
  declarations: [CoursesComponent],
  exports: [CoursesComponent]
})
export class CoursesModule { }
