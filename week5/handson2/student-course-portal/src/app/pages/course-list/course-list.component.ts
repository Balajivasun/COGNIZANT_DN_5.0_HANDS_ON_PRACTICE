import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="container">
      <h2>Course Listings</h2>
      <app-course-card
        *ngFor="let c of courses"
        [course]="c"
        (enrollRequested)="onEnroll($event)">
      </app-course-card>

      <p *ngIf="selectedCourseId" class="selected-info">
        Selected course ID: {{ selectedCourseId }}
      </p>
    </div>
  `,
  styles: [`
    .container { padding: 20px; max-width: 900px; margin: 0 auto; }
    .selected-info { background: #e8f8f5; color: #16a085; padding: 10px; border-radius: 4px; font-weight: bold; }
  `]
})
export class CourseListComponent {
  courses = [
    { id: 101, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4 },
    { id: 102, name: 'Web Development with Angular', code: 'CS102', credits: 3 },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 4 },
    { id: 104, name: 'Operating Systems', code: 'CS104', credits: 3 },
    { id: 105, name: 'Software Engineering', code: 'CS105', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
