import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private courses = [
    { id: 1, name: 'INGLES' },
    { id: 2, name: 'MATEMATICAS' },
    { id: 3, name: 'PROGRAMACION' },
  ];

  constructor() {}

  getCourses(): Observable<any[]> {
    return of(this.courses);
  }

  // Alta: agrega un curso
  addCourse(course: any): Observable<any> {
    this.courses.push(course);  
    return of(course);  
  }

  // Baja: elimina un curso
  deleteCourse(id: number): Observable<any> {
    this.courses = this.courses.filter(course => course.id !== id);
    return of({ id });  
  }

  // Modificación: actualiza un curso
  updateCourse(updatedCourse: any): Observable<any> {
    const index = this.courses.findIndex(course => course.id === updatedCourse.id);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
    return of(updatedCourse);  
  }
}
