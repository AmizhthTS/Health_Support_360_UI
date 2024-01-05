import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailListComponent } from './customerdetail-list.component';

describe('CustomerdetailListComponent', () => {
  let component: CustomerdetailListComponent;
  let fixture: ComponentFixture<CustomerdetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
