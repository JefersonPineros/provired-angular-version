import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosActivosComponent } from './procesos-activos.component';

describe('ProcesosActivosComponent', () => {
  let component: ProcesosActivosComponent;
  let fixture: ComponentFixture<ProcesosActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
