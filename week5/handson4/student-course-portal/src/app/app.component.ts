import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, EnrollmentFormComponent],
  template: `
    <app-header></app-header>
    <app-enrollment-form></app-enrollment-form>
  `
})
export class AppComponent {}
