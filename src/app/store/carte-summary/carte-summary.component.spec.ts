import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteSummaryComponent } from './carte-summary.component';

describe('CarteSummaryComponent', () => {
  let component: CarteSummaryComponent;
  let fixture: ComponentFixture<CarteSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
