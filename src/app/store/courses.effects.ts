import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CourseActions from './courses.actions'; // Ruta correcta
import { Course } from '../models/course.model';  // Importa la interfaz Course desde su archivo de modelo
import { createEffect } from '@ngrx/effects';  // Asegúrate de que esté importado

@Injectable()
export class CoursesEffects {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      mergeMap(() =>
        this.http.get<Course[]>(this.apiUrl).pipe(
          map((courses) => CourseActions.loadCoursesSuccess({ courses })),
          catchError((error) =>
            of(CourseActions.loadCoursesFailure({ error }))
          )
        )
      )
    )
  );
}
