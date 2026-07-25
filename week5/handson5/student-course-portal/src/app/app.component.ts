import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveEnrollmentFormComponent],
  template: `
    <app-header></app-header>
    <app-reactive-enrollment-form></app-reactive-enrollment-form>
  `
})
export class AppComponent {}
