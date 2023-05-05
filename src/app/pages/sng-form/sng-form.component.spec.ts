import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SngFormComponent } from './sng-form.component';

describe('SngFormComponent', () => {
  let component: SngFormComponent;
  let fixture: ComponentFixture<SngFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SngFormComponent]
    });
    fixture = TestBed.createComponent(SngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
