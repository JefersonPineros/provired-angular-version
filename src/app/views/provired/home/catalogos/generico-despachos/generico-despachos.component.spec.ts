import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoDespachosComponent } from './generico-despachos.component';

describe('GenericoDespachosComponent', () => {
  let component: GenericoDespachosComponent;
  let fixture: ComponentFixture<GenericoDespachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericoDespachosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericoDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
