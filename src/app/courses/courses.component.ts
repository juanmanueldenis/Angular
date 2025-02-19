import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  trackById(index: number, course: any): number {
    return course.id;
  }

  courses: any[] = [];
  editingCourseId: number | null = null;
  updatedName: string = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = []; // Asegura que el array esté vacío antes de cargar los datos

    this.coursesService.getCourses().subscribe(data => {
      console.log('Datos recibidos:', data);
      this.courses = data;
    });
  }

  startEditing(course: any): void {
    this.editingCourseId = course.id;
    this.updatedName = course.name;  // Rellenar input con el nombre actual
  }
  
  addCourse(): void {
    const newId = this.courses.length > 0 ? Math.max(...this.courses.map(c => c.id)) + 1 : 1;
    const newCourse = { id: newId, name: `Nuevo Curso ${newId}` };
  
    this.coursesService.addCourse(newCourse).subscribe(course => {
      this.courses = this.courses.filter(c => c.id !== course.id); // Evita duplicados
      this.courses = [...this.courses, course]; // Asegurar una nueva referencia al array
    });
  }
  

  deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id).subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== id);  // Elimina el curso
    });
  }

  updateCourse(): void {
    if (this.editingCourseId !== null) {
      const updatedCourse = {
        id: this.editingCourseId,
        name: this.updatedName
      };

      this.coursesService.updateCourse(updatedCourse).subscribe(course => {
        const index = this.courses.findIndex(c => c.id === course.id);
        if (index !== -1) {
          this.courses[index] = course;
        }
        this.editingCourseId = null;  // Salir del modo edición
      });
    }
  }
}
