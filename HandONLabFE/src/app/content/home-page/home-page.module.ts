import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TopBarModule } from './top-bar/top-bar.module';
import { JumbotronModule } from './jumbotron/jumbotron.module';
import { CoursesModule } from './courses/courses.module';
import { CourseCatalogModule } from './course-catalog/course-catalog.module';

@NgModule({
  imports: [
    CommonModule,

    // Generated Modules
    TopBarModule,
    JumbotronModule,
    CoursesModule,
    CourseCatalogModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
