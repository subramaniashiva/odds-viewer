/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OddsDetailsServiceService } from './odds-details-service.service';

describe('OddsDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OddsDetailsServiceService]
    });
  });

  it('should ...', inject([OddsDetailsServiceService], (service: OddsDetailsServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all todos', inject([OddsDetailsServiceService], (service: OddsDetailsServiceService) => {
    expect(service.getOddDetails()).toEqual([{}]);
  }));
});
