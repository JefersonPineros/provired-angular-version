import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNotificacionesComponent } from './report-notificaciones.component';

describe('ReportNotificacionesComponent', () => {
  let component: ReportNotificacionesComponent;
  let fixture: ComponentFixture<ReportNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportNotificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
