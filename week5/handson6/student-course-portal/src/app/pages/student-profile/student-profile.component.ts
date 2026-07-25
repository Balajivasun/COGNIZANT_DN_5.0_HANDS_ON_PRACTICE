import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Student Profile</h2>
      <h3>My Enrolled Courses:</h3>
      <ul>
        <li *ngFor="let c of enrolledCourses">
          {{ c.name }} ({{ c.code }}) - {{ c.credits }} Credits
        </li>
      </ul>
      <p *ngIf="enrolledCourses.length === 0">No courses enrolled yet.</p>
    </div>
  `
})
export class StudentProfileComponent {
  get enrolledCourses(): Course[] {
    return this.enrollmentService.getEnrolledCourses();
  }

  constructor(private enrollmentService: EnrollmentService) {}
}
