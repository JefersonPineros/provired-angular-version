import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersDinamicsComponent } from './filters-dinamics.component';

describe('FiltersDinamicsComponent', () => {
  let component: FiltersDinamicsComponent;
  let fixture: ComponentFixture<FiltersDinamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersDinamicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersDinamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
