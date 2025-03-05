import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model'; // Importa la interfaz Course desde su archivo de modelo

// Acción para cargar los cursos
export const loadCourses = createAction('[Courses] Load Courses');

// Acción para cargar los cursos con éxito
export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[] }>()  // Propiedad 'courses' con un arreglo de Course
);

// Acción para cargar los cursos con error
export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()  // Propiedad 'error' para manejar el error
);
