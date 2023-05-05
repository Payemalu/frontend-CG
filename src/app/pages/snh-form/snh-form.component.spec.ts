import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnhFormComponent } from './snh-form.component';

describe('SnhFormComponent', () => {
  let component: SnhFormComponent;
  let fixture: ComponentFixture<SnhFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnhFormComponent]
    });
    fixture = TestBed.createComponent(SnhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
