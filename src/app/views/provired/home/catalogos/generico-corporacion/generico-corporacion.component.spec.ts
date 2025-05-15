import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoCorporacionComponent } from './generico-corporacion.component';

describe('GenericoCorporacionComponent', () => {
  let component: GenericoCorporacionComponent;
  let fixture: ComponentFixture<GenericoCorporacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericoCorporacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericoCorporacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
