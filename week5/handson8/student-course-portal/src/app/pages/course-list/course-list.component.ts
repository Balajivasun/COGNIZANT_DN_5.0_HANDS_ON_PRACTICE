import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h2>Courses API List</h2>
      <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
      <ul>
        <li *ngFor="let c of courses$ | async">
          {{ c.name }} - {{ c.credits }} Credits
        </li>
      </ul>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses$!: Observable<Course[]>;
  errorMessage = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }
}
