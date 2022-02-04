import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarGastosComponent } from './ingresar-gastos.component';

describe('IngresarGastosComponent', () => {
  let component: IngresarGastosComponent;
  let fixture: ComponentFixture<IngresarGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
