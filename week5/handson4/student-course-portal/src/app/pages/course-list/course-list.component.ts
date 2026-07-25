import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="container">
      <h2>Course Listings</h2>

      <p *ngIf="isLoading">Loading courses...</p>

      <ng-container *ngIf="!isLoading">
        <div *ngIf="courses.length > 0; else noCourses">
          <!-- Comment: trackBy avoids re-rendering unaffected DOM nodes on array updates -->
          <app-course-card
            *ngFor="let course of courses; let i = index; trackBy: trackByCourseId"
            [course]="course"
            (enrollRequested)="onEnroll($event)">
          </app-course-card>
        </div>

        <ng-template #noCourses>
          <p>No courses available.</p>
        </ng-template>
      </ng-container>

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
export class CourseListComponent implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;

  courses: Array<{ id: number; name: string; code: string; credits: number; gradeStatus: 'passed' | 'failed' | 'pending'; enrolled?: boolean }> = [
    { id: 101, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 102, name: 'Web Development with Angular', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 103, name: 'Database Management Systems', code: 'CS103', credits: 4, gradeStatus: 'failed' },
    { id: 104, name: 'Operating Systems', code: 'CS104', credits: 3, gradeStatus: 'passed' }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
    const found = this.courses.find(c => c.id === courseId);
    if (found) found.enrolled = true;
  }
}
