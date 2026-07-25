import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch courses via GET', () => {
    const dummyCourses: Course[] = [
      { id: 101, name: 'Course 1', code: 'C1', credits: 3, gradeStatus: 'passed' },
      { id: 102, name: 'Course 2', code: 'C2', credits: 4, gradeStatus: 'pending' }
    ];

    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(dummyCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCourses);
  });

  it('should handle HTTP error gracefully', () => {
    service.getCourses().subscribe({
      next: () => fail('Should have failed with 500 error'),
      error: (err) => {
        expect(err).toBeTruthy();
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
