/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { OddsDetailsService } from './odds-details-service.service';
import data from '../../utils/data';

describe('OddsDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [OddsDetailsService]
    });
  });

  it('should render component', inject([OddsDetailsService], (service: OddsDetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all odd details', inject([OddsDetailsService], (service: OddsDetailsService) => {
    service.getOddDetails().then((item) => {
      expect(item).toEqual(data);
    });
  }));
});
