import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonPageComponent } from './reason-page.component';

describe('ReasonPageComponent', () => {
  let component: ReasonPageComponent;
  let fixture: ComponentFixture<ReasonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
