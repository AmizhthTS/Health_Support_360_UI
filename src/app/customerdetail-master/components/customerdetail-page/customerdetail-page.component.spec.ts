import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailPageComponent } from './customerdetail-page.component';

describe('CustomerdetailPageComponent', () => {
  let component: CustomerdetailPageComponent;
  let fixture: ComponentFixture<CustomerdetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
