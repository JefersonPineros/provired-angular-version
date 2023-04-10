import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitarNotificacionesComponent } from './digitar-notificaciones.component';

describe('DigitarNotificacionesComponent', () => {
  let component: DigitarNotificacionesComponent;
  let fixture: ComponentFixture<DigitarNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitarNotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitarNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
