import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioingresoComponent } from './formularioingreso.component';

describe('FormularioingresoComponent', () => {
  let component: FormularioingresoComponent;
  let fixture: ComponentFixture<FormularioingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
