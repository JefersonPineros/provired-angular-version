import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaJucialComponent } from './rama-jucial.component';

describe('RamaJucialComponent', () => {
  let component: RamaJucialComponent;
  let fixture: ComponentFixture<RamaJucialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaJucialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaJucialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
