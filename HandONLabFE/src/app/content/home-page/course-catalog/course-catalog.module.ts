import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCatalogComponent } from './course-catalog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseCatalogComponent],
  exports: [CourseCatalogComponent]
})
export class CourseCatalogModule { }
