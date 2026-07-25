import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="brand">Student Course Portal</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Profile</a></li>
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
