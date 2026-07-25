import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  template: `
    <div class="card" [ngClass]="cardClasses" [ngStyle]="{'border-left': getBorderColor()}" [appHighlight]="'#fffde7'">
      <div class="card-header">
        <h3>{{ course.name }}</h3>
        <span [ngSwitch]="course.gradeStatus">
          <span *ngSwitchCase="'passed'" class="badge badge-passed">Passed</span>
          <span *ngSwitchCase="'failed'" class="badge badge-failed">Failed</span>
          <span *ngSwitchDefault class="badge badge-pending">Pending</span>
        </span>
      </div>

      <p>Code: {{ course.code }} | Credits: {{ course.credits | creditLabel }}</p>

      <div *ngIf="isExpanded" class="details">
        <p>Full course description and prerequisite details go here.</p>
      </div>

      <div class="actions">
        <button (click)="onEnrollClick()">Enroll</button>
        <button class="btn-sec" (click)="isExpanded = !isExpanded">
          {{ isExpanded ? 'Hide Details' : 'Show Details' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .card { background: white; border-radius: 8px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-left: 5px solid #ccc; transition: all 0.3s ease; }
    .card--enrolled { background-color: #e8f8f5; }
    .card--full { border-right: 4px solid #f39c12; }
    .expanded { box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .actions { display: flex; gap: 10px; margin-top: 10px; }
    button { background: #27ae60; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; }
    .btn-sec { background: #7f8c8d; }
  `]
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: { id: number; name: string; code: string; credits: number; gradeStatus: 'passed' | 'failed' | 'pending'; enrolled?: boolean };
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;

  // Comment: Getters clean up component templates by encapsulating conditional logic in class
  get cardClasses(): any {
    return {
      'card--enrolled': !!this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  getBorderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return '5px solid #2ecc71';
      case 'failed': return '5px solid #e74c3c';
      default: return '5px solid #95a5a6';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCard ngOnChanges:', changes);
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
