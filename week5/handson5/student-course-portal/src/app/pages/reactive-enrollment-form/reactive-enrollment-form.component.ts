import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { noCourseCode, simulateEmailCheck } from '../../validators/custom-validators';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <h2>Reactive Student Enrollment Form</h2>

      <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Student Name *</label>
          <input formControlName="studentName">
          <span *ngIf="enrollForm.get('studentName')?.touched && enrollForm.get('studentName')?.errors?.['required']" class="error-msg">Name is required</span>
          <span *ngIf="enrollForm.get('studentName')?.touched && enrollForm.get('studentName')?.errors?.['minlength']" class="error-msg">Min length 3 chars</span>
        </div>

        <div class="form-group">
          <label>Student Email *</label>
          <input formControlName="studentEmail">
          <span *ngIf="enrollForm.get('studentEmail')?.touched && enrollForm.get('studentEmail')?.errors?.['required']" class="error-msg">Email is required</span>
          <span *ngIf="enrollForm.get('studentEmail')?.errors?.['emailTaken']" class="error-msg">Email taken (test&#64; reserved)</span>
        </div>

        <div class="form-group">
          <label>Course Code *</label>
          <input formControlName="courseId">
          <span *ngIf="enrollForm.get('courseId')?.touched && enrollForm.get('courseId')?.errors?.['required']" class="error-msg">Course Code is required</span>
          <span *ngIf="enrollForm.get('courseId')?.errors?.['noCourseCode']" class="error-msg">Course code starting with XX is not allowed.</span>
        </div>

        <div class="form-group">
          <label>Preferred Semester</label>
          <select formControlName="preferredSemester">
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
          </select>
        </div>

        <div class="form-group">
          <h3>Additional Courses (FormArray)</h3>
          <div formArrayName="additionalCourses">
            <div *ngFor="let ctrl of additionalCourses.controls; let i = index" class="array-row">
              <input [formControl]="$any(ctrl)" placeholder="Course Code">
              <button type="button" (click)="removeCourse(i)">Remove</button>
            </div>
          </div>
          <button type="button" class="btn-add" (click)="addCourse()">Add Another Course</button>
        </div>

        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" formControlName="agreeToTerms">
            Agree to Terms *
          </label>
        </div>

        <button type="submit" [disabled]="enrollForm.invalid">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container { max-width: 600px; margin: 30px auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .form-group { margin-bottom: 18px; display: flex; flex-direction: column; }
    input, select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    .array-row { display: flex; gap: 10px; margin-bottom: 8px; }
    .error-msg { color: #e74c3c; font-size: 0.85rem; }
    button[type="submit"] { background: #2980b9; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
    button[type="submit"]:disabled { background: #bdc3c7; }
    .btn-add { background: #27ae60; color: white; border: none; padding: 6px 12px; border-radius: 4px; margin-top: 5px; cursor: pointer; }
  `]
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      additionalCourses: this.fb.array([]),
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  // Comment: Typed getter avoids template type casting errors when rendering FormArray controls
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // Comment: value excludes disabled controls, getRawValue() includes all controls regardless of state
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
  }
}
