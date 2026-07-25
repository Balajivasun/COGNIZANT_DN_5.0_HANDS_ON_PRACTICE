import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ course.name }}</h3>
      <button (click)="onEnroll()">Enroll</button>
    </div>
  `
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
