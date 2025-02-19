import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
    service = TestBed.inject(CoursesService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar una lista de cursos', fakeAsync(() => {
    let courses: any[] = [];
    service.getCourses().subscribe(res => {
      courses = res;
    });

    tick();  // Avanza el temporizador para resolver el observable
    expect(courses.length).toBeGreaterThan(0);  // La aserción se hace después de asignar la respuesta
  }));
});
