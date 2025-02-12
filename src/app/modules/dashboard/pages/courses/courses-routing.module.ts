import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '../../../../courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent } // Ruta base para 'courses'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
