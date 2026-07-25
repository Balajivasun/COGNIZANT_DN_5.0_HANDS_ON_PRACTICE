import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="brand">Student Course Portal</div>
      <ul class="nav-links">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/courses">Courses</a></li>
        <li><a routerLink="/profile">Profile</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar { display: flex; justify-content: space-between; background: #2c3e50; padding: 15px 30px; color: white; }
    .brand { font-size: 1.4rem; font-weight: bold; }
    .nav-links { display: flex; list-style: none; gap: 20px; margin: 0; padding: 0; }
    .nav-links a { color: white; text-decoration: none; font-weight: 500; }
  `]
})
export class HeaderComponent {}
