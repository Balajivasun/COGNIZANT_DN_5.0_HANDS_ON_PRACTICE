import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 101, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 102, name: 'Web Development with Angular', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 4, gradeStatus: 'failed' },
    { id: 104, name: 'Operating Systems', code: 'CS104', credits: 3, gradeStatus: 'passed' },
    { id: 105, name: 'Software Engineering', code: 'CS105', credits: 3, gradeStatus: 'pending' }
  ];

  getCourses(): Course[] {
    return [...this.courses];
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
