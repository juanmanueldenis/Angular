import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../../../../courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    FormsModule,
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
