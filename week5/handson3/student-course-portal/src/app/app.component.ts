import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './pages/course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CourseListComponent],
  template: `
    <app-header></app-header>
    <app-course-list></app-course-list>
  `
})
export class AppComponent {}
