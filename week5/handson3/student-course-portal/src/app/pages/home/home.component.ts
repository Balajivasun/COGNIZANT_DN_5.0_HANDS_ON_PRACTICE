import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Student Course Portal</h1>
      <p>Manage your academic journey, browse available courses, track grades, and complete course enrollments.</p>
      
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
  `]
})
export class HomeComponent {}
