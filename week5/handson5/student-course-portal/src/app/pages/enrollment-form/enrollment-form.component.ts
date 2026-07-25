import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Student Course Enrollment Request</h2>

      <div *ngIf="submitted" class="success-alert">
        Enrollment request submitted successfully!
      </div>

      <form #enrollForm="ngForm" (ngSubmit)="onSubmit(enrollForm)">
        <div class="form-group">
          <label>Student Name *</label>
          <input
            type="text"
            name="studentName"
            [(ngModel)]="formData.studentName"
            #nameCtrl="ngModel"
            required
            minlength="3"
          >
          <span *ngIf="nameCtrl.touched && nameCtrl.errors?.['required']" class="error-msg">
            Name is required
          </span>
          <span *ngIf="nameCtrl.touched && nameCtrl.errors?.['minlength']" class="error-msg">
            Name must be at least 3 characters
          </span>
        </div>

        <div class="form-group">
          <label>Student Email *</label>
          <input
            type="email"
            name="studentEmail"
            [(ngModel)]="formData.studentEmail"
            #emailCtrl="ngModel"
            required
            email
          >
          <span *ngIf="emailCtrl.touched && emailCtrl.errors?.['required']" class="error-msg">Email is required</span>
          <span *ngIf="emailCtrl.touched && emailCtrl.errors?.['email']" class="error-msg">Valid email is required</span>
        </div>

        <div class="form-group">
          <label>Course ID *</label>
          <input
            type="number"
            name="courseId"
            [(ngModel)]="formData.courseId"
            #courseCtrl="ngModel"
            required
          >
          <span *ngIf="courseCtrl.touched && courseCtrl.errors?.['required']" class="error-msg">Course ID is required</span>
        </div>

        <div class="form-group">
          <label>Preferred Semester</label>
          <select name="preferredSemester" [(ngModel)]="formData.preferredSemester">
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
          </select>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              [(ngModel)]="formData.agreeToTerms"
              #agreeCtrl="ngModel"
              required
            >
            I agree to the terms and conditions *
          </label>
          <span *ngIf="agreeCtrl.touched && agreeCtrl.errors?.['required']" class="error-msg">You must agree to terms</span>
        </div>

        <div class="btn-group">
          <button type="submit" [disabled]="enrollForm.invalid">Submit</button>
          <button type="button" class="btn-reset" (click)="onReset(enrollForm)">Reset</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .form-container { max-width: 600px; margin: 30px auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 18px; display: flex; flex-direction: column; }
    .form-group label { font-weight: bold; margin-bottom: 6px; }
    input[type="text"], input[type="email"], input[type="number"], select { padding: 9px; border: 1px solid #ccc; border-radius: 4px; }
    .checkbox-group { flex-direction: row; gap: 8px; align-items: center; }
    .error-msg { color: #e74c3c; font-size: 0.85rem; margin-top: 4px; }
    .success-alert { background: #d4edda; color: #155724; padding: 12px; border-radius: 4px; margin-bottom: 15px; }
    .btn-group { display: flex; gap: 10px; margin-top: 15px; }
    button[type="submit"] { background: #27ae60; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
    button[type="submit"]:disabled { background: #bdc3c7; cursor: not-allowed; }
    .btn-reset { background: #7f8c8d; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
  `]
})
export class EnrollmentFormComponent {
  formData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };
  submitted = false;

  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  onReset(form: NgForm): void {
    form.resetForm({ preferredSemester: 'Odd' });
    this.submitted = false;
  }
}
