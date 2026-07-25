import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="home-container">
      <h1>{{ portalName }}</h1>
      <p>Manage your academic journey, browse available courses, track grades, and complete course enrollments.</p>

      <!-- Property Binding & Event Binding -->
      <button [disabled]="!isPortalActive" (click)="onEnrollClick()">Enroll Now</button>
      <p *ngIf="message" class="msg">{{ message }}</p>

      <!-- Two-Way Binding with ngModel -->
      <!-- Comment: [property] is one-way (Component -> DOM). [(ngModel)] is two-way (DOM <-> Component). -->
      <div class="search-box">
        <label>Search Courses: </label>
        <input [(ngModel)]="searchTerm" placeholder="Type course name...">
        <p>Searching for: {{ searchTerm }}</p>
      </div>

      <div class="stats-row">
        <div class="stat-card">
          <h3>Courses Available</h3>
          <p class="stat-num">12</p>
        </div>
        <div class="stat-card">
          <h3>Enrolled</h3>
          <p class="stat-num">3</p>
        </div>
        <div class="stat-card">
          <h3>GPA</h3>
          <p class="stat-num">3.8</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container { padding: 30px; max-width: 900px; margin: 0 auto; }
    .stats-row { display: flex; gap: 20px; margin-top: 25px; }
    .stat-card { flex: 1; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
    .stat-num { font-size: 2rem; font-weight: bold; color: #3498db; margin: 5px 0 0 0; }
    .search-box { margin: 20px 0; padding: 15px; background: #eef2f7; border-radius: 6px; }
    .msg { color: #27ae60; font-weight: bold; }
    button { padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:disabled { background: #bdc3c7; cursor: not-allowed; }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
