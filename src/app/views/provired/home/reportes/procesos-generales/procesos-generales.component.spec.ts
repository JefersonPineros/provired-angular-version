import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosGeneralesComponent } from './procesos-generales.component';

describe('ProcesosGeneralesComponent', () => {
  let component: ProcesosGeneralesComponent;
  let fixture: ComponentFixture<ProcesosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosGeneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
