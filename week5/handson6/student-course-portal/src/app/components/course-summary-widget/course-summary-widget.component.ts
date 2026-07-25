import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget">
      <h4>Course Summary Widget</h4>
      <p>Shared Singleton Service Total Courses: {{ courseService.getCourses().length }}</p>
    </div>
  `,
  styles: [`
    .widget { background: #eef2f7; padding: 10px 15px; border-radius: 6px; margin: 10px 0; }
  `]
})
export class CourseSummaryWidgetComponent {
  constructor(public courseService: CourseService) {}
}
