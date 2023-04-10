import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarRadicadosComponent } from './validar-radicados.component';

describe('ValidarRadicadosComponent', () => {
  let component: ValidarRadicadosComponent;
  let fixture: ComponentFixture<ValidarRadicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarRadicadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarRadicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
