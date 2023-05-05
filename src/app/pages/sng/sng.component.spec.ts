import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SngComponent } from './sng.component';

describe('SngComponent', () => {
  let component: SngComponent;
  let fixture: ComponentFixture<SngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SngComponent]
    });
    fixture = TestBed.createComponent(SngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
