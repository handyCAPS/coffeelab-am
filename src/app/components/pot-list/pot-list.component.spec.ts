import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotListComponent } from './pot-list.component';

describe('PotListComponent', () => {
  let component: PotListComponent;
  let fixture: ComponentFixture<PotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
