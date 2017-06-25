import { Component, OnInit, Input } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() selectedTeam: OddsListItemInterface;

  options: Object = {};

  constructor() {}

  ngOnInit() {

  }

  ngOnChanges(changes: {selectedTeam: {currentValue: OddsListItemInterface}}) {
    this.renderChart(changes.selectedTeam.currentValue);
  }
  getSeriesData(team: OddsListItemInterface):Array<Object> {
    let seriesArr = [];
    let seriesObj = {};
    team.exchanges && team.exchanges.map((item) => {
      seriesObj = {};
      seriesObj['name'] = item.name;
      seriesObj['data'] = item.history.back_all.map((item) => (item.price));
      seriesArr.push(seriesObj);
    });
    return seriesArr;
  }

  getCategories(team: OddsListItemInterface): Array<string> {
    return team.exchanges && team.exchanges[0].history.back_all.map((item) => (item.date));
  }
  renderChart(team: OddsListItemInterface) {
    if(team) {
      this.options = {
        title: {
          text: 'Best Back odds for ' + team.name
        },
        xAxis: {
          categories: this.getCategories(team)
        },
        yAxis: {
          title: {
              text: 'Back Bet Maximum'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
                enabled: true
            }
          }
        },
        series: this.getSeriesData(team)
      }
      return this.options;
    }
  }

}
