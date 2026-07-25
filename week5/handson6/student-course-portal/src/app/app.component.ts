import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { NotificationComponent } from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CourseListComponent, StudentProfileComponent, NotificationComponent],
  template: `
    <app-header></app-header>
    <div style="padding: 20px;">
      <app-notification></app-notification>
      <app-course-list></app-course-list>
      <hr>
      <app-student-profile></app-student-profile>
    </div>
  `
})
export class AppComponent {}
