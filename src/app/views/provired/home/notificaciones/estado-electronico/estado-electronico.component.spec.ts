import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoElectronicoComponent } from './estado-electronico.component';

describe('EstadoElectronicoComponent', () => {
  let component: EstadoElectronicoComponent;
  let fixture: ComponentFixture<EstadoElectronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoElectronicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
