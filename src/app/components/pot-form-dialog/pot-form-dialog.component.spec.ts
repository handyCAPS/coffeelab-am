import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotFormDialogComponent } from './pot-form-dialog.component';

describe('PotFormDialogComponent', () => {
  let component: PotFormDialogComponent;
  let fixture: ComponentFixture<PotFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
