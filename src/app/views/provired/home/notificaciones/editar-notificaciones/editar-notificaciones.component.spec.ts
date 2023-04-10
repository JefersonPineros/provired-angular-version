import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotificacionesComponent } from './editar-notificaciones.component';

describe('EditarNotificacionesComponent', () => {
  let component: EditarNotificacionesComponent;
  let fixture: ComponentFixture<EditarNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
