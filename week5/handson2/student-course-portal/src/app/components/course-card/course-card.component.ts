import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ course.name }}</h3>
      <p>Code: {{ course.code }} | Credits: {{ course.credits }}</p>
      <button (click)="onEnrollClick()">Enroll</button>
    </div>
  `,
  styles: [`
    .card { background: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    button { background: #27ae60; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
    button:hover { background: #219150; }
  `]
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: { id: number; name: string; code: string; credits: number };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent ngOnChanges:', changes);
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
