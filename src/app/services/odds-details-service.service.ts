import { Injectable } from '@angular/core';

@Injectable()
export class OddsDetailsServiceService {

  details: Array<Object> = [{}];
  constructor() { }

  getOddDetails(): Array<Object> {
    return this.details;
  }
}
