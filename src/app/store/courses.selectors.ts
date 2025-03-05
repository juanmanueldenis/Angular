import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './courses.reducer';  // Usamos la interfaz correcta

// Seleccionador para acceder al estado de los cursos
export const selectCoursesState = createFeatureSelector<CourseState>('courses');

// Seleccionador para obtener todos los cursos
export const selectAllCourses = createSelector(
  selectCoursesState,
  (state: CourseState) => state.courses
);