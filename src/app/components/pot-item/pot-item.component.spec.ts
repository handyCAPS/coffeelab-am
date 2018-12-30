import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotItemComponent } from './pot-item.component';

describe('PotItemComponent', () => {
  let component: PotItemComponent;
  let fixture: ComponentFixture<PotItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
