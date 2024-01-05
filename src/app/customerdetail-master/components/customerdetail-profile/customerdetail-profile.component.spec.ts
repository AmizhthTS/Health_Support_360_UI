import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailProfileComponent } from './customerdetail-profile.component';

describe('CustomerdetailProfileComponent', () => {
  let component: CustomerdetailProfileComponent;
  let fixture: ComponentFixture<CustomerdetailProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdetailProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
