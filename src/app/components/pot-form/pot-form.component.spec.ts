import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotFormComponent } from './pot-form.component';

describe('PotFormComponent', () => {
  let component: PotFormComponent;
  let fixture: ComponentFixture<PotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
