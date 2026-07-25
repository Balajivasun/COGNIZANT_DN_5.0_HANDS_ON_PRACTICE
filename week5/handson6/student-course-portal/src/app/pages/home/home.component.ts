import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Student Portal Home</h1>
      <p>Total Available Courses (via CourseService): {{ courseService.getCourses().length }}</p>
    </div>
  `
})
export class HomeComponent {
  constructor(public courseService: CourseService) {}
}
