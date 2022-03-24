import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablalibroComponent } from './tablalibro.component';

describe('TablalibroComponent', () => {
  let component: TablalibroComponent;
  let fixture: ComponentFixture<TablalibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablalibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablalibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
