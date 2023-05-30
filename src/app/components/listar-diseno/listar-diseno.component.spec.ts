import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDisenoComponent } from './listar-diseno.component';

describe('ListarDisenoComponent', () => {
  let component: ListarDisenoComponent;
  let fixture: ComponentFixture<ListarDisenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDisenoComponent]
    });
    fixture = TestBed.createComponent(ListarDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
