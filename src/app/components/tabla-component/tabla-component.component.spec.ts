import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponentComponent } from './tabla-component.component';

describe('TablaComponentComponent', () => {
  let component: TablaComponentComponent;
  let fixture: ComponentFixture<TablaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
