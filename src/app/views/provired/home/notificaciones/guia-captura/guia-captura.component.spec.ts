import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaCapturaComponent } from './guia-captura.component';

describe('GuiaCapturaComponent', () => {
  let component: GuiaCapturaComponent;
  let fixture: ComponentFixture<GuiaCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaCapturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
