import { TestBed } from '@angular/core/testing';

import { HelperFunctionsService } from './helper-functions.service';

describe('HelperFunctionsService', () => {
  let service: HelperFunctionsService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(HelperFunctionsService);
    expect(service).toBeTruthy();
  });

  it('should return wheter an object has a property', () => {
    const testObject = {
      testKey: 'testValue',
      testFunction: () => {}
    };
    expect(service.hasOwn(testObject, 'testKey')).toBe(true);
    expect(service.hasOwn(testObject, 'testValue')).toBe(false);
    expect(service.hasOwn(testObject, 'testFunction')).toBe(true);
  });
});
