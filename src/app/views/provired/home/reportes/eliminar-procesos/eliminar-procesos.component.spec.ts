import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProcesosComponent } from './eliminar-procesos.component';

describe('EliminarProcesosComponent', () => {
  let component: EliminarProcesosComponent;
  let fixture: ComponentFixture<EliminarProcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProcesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
