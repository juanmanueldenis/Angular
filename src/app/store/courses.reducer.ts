import { createReducer, on } from '@ngrx/store';
import { loadCoursesSuccess, loadCoursesFailure } from './courses.actions';  // Correcta importación de acciones

// Definimos la interfaz Course directamente en este archivo
export interface Course {
  id: number;
  name: string;
}

export interface CourseState {
  courses: Course[];
  error: string | null;
}

// Estado inicial
export const initialState: CourseState = {
  courses: [],
  error: null,
};

// Reducer
export const coursesReducer = createReducer(
  initialState,
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    error: null, // Limpiamos el error cuando la carga es exitosa
  })),
  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    error, // Asignamos el error en el estado
  }))
);
