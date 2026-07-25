import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course title via @Input', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    const titleEl = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleEl.textContent).toContain('Data Structures');
  });

  it('should emit @Output event on button click', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should trigger ngOnChanges spy', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: new SimpleChange(null, { id: 1, name: 'Test' }, true)
    });
    expect(console.log).toHaveBeenCalled();
  });
});
