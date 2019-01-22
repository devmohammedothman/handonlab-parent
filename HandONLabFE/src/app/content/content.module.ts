import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  imports: [
    CommonModule,

    // Generated Modules
    HomePageModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule { }
