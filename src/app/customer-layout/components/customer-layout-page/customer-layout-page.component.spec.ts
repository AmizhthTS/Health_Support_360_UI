import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLayoutPageComponent } from './customer-layout-page.component';

describe('CustomerLayoutPageComponent', () => {
  let component: CustomerLayoutPageComponent;
  let fixture: ComponentFixture<CustomerLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLayoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
