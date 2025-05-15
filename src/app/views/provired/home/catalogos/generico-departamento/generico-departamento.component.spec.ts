import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoDepartamentoComponent } from './generico-departamento.component';

describe('GenericoDepartamentoComponent', () => {
  let component: GenericoDepartamentoComponent;
  let fixture: ComponentFixture<GenericoDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericoDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericoDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
