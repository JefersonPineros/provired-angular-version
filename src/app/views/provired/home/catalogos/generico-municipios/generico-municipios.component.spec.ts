import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoMunicipiosComponent } from './generico-municipios.component';

describe('GenericoMunicipiosComponent', () => {
  let component: GenericoMunicipiosComponent;
  let fixture: ComponentFixture<GenericoMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericoMunicipiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericoMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
