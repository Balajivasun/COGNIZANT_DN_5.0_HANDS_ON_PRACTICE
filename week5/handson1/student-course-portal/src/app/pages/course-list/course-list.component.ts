import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Available Courses</h2>
      <p>Course listings will be loaded here in Hands-On 2 and 3.</p>
    </div>
  `
})
export class CourseListComponent {}
