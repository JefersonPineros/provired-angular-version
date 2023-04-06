import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDespachosComponent } from './email-despachos.component';

describe('EmailDespachosComponent', () => {
  let component: EmailDespachosComponent;
  let fixture: ComponentFixture<EmailDespachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDespachosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
