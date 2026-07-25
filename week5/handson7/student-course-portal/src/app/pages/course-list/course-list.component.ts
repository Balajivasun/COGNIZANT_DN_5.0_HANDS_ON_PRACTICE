import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div style="padding: 10px;">
      <input [(ngModel)]="searchTerm" (ngModelChange)="onSearchChange()" placeholder="Search...">
      <ul>
        <li *ngFor="let c of courses" (click)="openCourse(c.id)" style="cursor: pointer; margin: 5px 0;">
          {{ c.name }} ({{ c.code }})
        </li>
      </ul>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm = '';

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    const querySearch = this.route.snapshot.queryParamMap.get('search');
    if (querySearch) {
      this.searchTerm = querySearch;
    }
  }

  onSearchChange(): void {
    this.router.navigate(['/courses'], { queryParams: { search: this.searchTerm } });
  }

  openCourse(id: number): void {
    this.router.navigate(['/courses', id]);
  }
}
