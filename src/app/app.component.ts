import { Component } from '@angular/core';

import { OddsDetailsService } from './services/odds-details-service/odds-details-service.service';
import { OddsListItemInterface } from './interfaces/oddsListItemInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OddsDetailsService]
})
export class AppComponent {
  oddsDetails: Array<OddsListItemInterface> = [];

  constructor(private odddetailsService: OddsDetailsService) {
    this.odddetailsService.getOddDetails().then((details) => {
      this.oddsDetails = details;
    });
  }
}
