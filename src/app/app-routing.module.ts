import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' }, // 🚀 Redirige a students por defecto
  { path: 'courses', loadChildren: () => import('../app/modules/dashboard/pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'students', loadChildren: () => import('../app/modules/dashboard/pages/students/students.module').then(m => m.StudentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
