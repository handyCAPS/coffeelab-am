import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperFunctionsService {

  constructor() { }

  public hasOwn(object: Object, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(object, key);
  }
}
