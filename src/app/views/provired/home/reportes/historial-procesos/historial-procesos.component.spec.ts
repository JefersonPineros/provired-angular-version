import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialProcesosComponent } from './historial-procesos.component';

describe('HistorialProcesosComponent', () => {
  let component: HistorialProcesosComponent;
  let fixture: ComponentFixture<HistorialProcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialProcesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
