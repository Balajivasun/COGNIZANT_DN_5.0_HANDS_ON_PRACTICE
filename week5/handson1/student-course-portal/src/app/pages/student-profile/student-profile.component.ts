import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Student Profile</h2>
      <p>Name: Alex Johnson</p>
      <p>Major: Computer Science</p>
    </div>
  `
})
export class StudentProfileComponent {}
