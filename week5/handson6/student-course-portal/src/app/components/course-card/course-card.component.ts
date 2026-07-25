import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ course.name }}</h3>
      <p>Code: {{ course.code }} | Credits: {{ course.credits }}</p>
      <button (click)="toggleEnroll()">
        {{ isEnrolled() ? 'Unenroll' : 'Enroll' }}
      </button>
    </div>
  `,
  styles: [`
    .card { background: white; padding: 15px; margin-bottom: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    button { padding: 6px 14px; border: none; border-radius: 4px; color: white; cursor: pointer; background: #27ae60; }
  `]
})
export class CourseCardComponent {
  @Input() course!: Course;

  constructor(private enrollmentService: EnrollmentService) {}

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleEnroll(): void {
    if (this.isEnrolled()) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }
}
