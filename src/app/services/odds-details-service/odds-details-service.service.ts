import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import data from '../../utils/data';
import API from '../../utils/api';
import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';

// Messages used by the Odd Details Service provider.
const messages = {
  errOccured: 'An error occured'
};

@Injectable()
export class OddsDetailsService {

  constructor(private http:Http) { }

  getOddDetails(): Promise<OddsListItemInterface[]> {
    return this.http.get(API.root + API.path.getOddsList)
      .toPromise()
      .then(() => data)
      .catch(this.handleError);
  }

  /**
   * Used to handle error from the API request.
   * Logs the error in console.
   * Ideally the error should be pushed to third party log service.
   * @param {Any} error - Error object.
   * @return {Promise} A rejected Promise.
   */
  private handleError(error: any): Promise<any> {
    console.error(messages.errOccured, error);
    return Promise.reject(error.message || error);
  }
}
