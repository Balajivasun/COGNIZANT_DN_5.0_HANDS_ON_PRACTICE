import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h2>NgRx Store Courses</h2>
      <p *ngIf="loading$ | async">Loading NgRx Store Data...</p>
      <ul>
        <li *ngFor="let c of courses$ | async">
          {{ c.name }} ({{ c.code }})
        </li>
      </ul>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.store.dispatch(loadCourses());
  }
}
