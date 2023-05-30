import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFormComponent } from './design-form.component';

describe('DesignFormComponent', () => {
  let component: DesignFormComponent;
  let fixture: ComponentFixture<DesignFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignFormComponent]
    });
    fixture = TestBed.createComponent(DesignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
