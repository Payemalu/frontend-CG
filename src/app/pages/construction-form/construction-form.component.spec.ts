import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionFormComponent } from './construction-form.component';

describe('ConstructionFormComponent', () => {
  let component: ConstructionFormComponent;
  let fixture: ComponentFixture<ConstructionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionFormComponent]
    });
    fixture = TestBed.createComponent(ConstructionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
