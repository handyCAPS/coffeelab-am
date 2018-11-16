import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePageComponent } from './coffee-page.component';

describe('CoffeeItemComponent', () => {
  let component: CoffeePageComponent;
  let fixture: ComponentFixture<CoffeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
