import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProcesalComponent } from './consulta-procesal.component';

describe('ConsultaProcesalComponent', () => {
  let component: ConsultaProcesalComponent;
  let fixture: ComponentFixture<ConsultaProcesalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProcesalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaProcesalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
