import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, CourseSummaryWidgetComponent],
  template: `
    <div class="container">
      <h2>Course List</h2>
      <app-course-summary-widget></app-course-summary-widget>

      <app-course-card *ngFor="let c of courses" [course]="c"></app-course-card>

      <button (click)="addSampleCourse()">Add Sample Course</button>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  addSampleCourse(): void {
    const newCourse: Course = {
      id: Date.now(),
      name: 'Cloud Computing Essentials',
      code: 'CS200',
      credits: 3,
      gradeStatus: 'pending'
    };
    this.courseService.addCourse(newCourse);
    this.courses = this.courseService.getCourses();
  }
}
