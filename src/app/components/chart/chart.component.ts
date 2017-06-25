import { Component, OnInit, Input } from '@angular/core';

import { OddsListItemInterface } from '../../interfaces/oddsListItemInterface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // selectedTeam - receives the team object clicked by the user from the child component.
  @Input() selectedTeam: OddsListItemInterface;

  // options - Chart config object.
  options: Object = {};

  constructor() {}

  ngOnInit() {}

  /**
   * Called when the component gets new preoperties.
   * @param {object} changes - Updated odds details.
   */
  ngOnChanges(changes: {selectedTeam: {currentValue: OddsListItemInterface}}) {
    this.renderChart(changes.selectedTeam.currentValue);
  }

  /**
   * Gets the series data to be used by chart.
   * @param {OddsListItemInterface} team - Team for which the chart is to be drawn.
   * @return {Array} returns the series array calculated.
   */
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

  /**
   * Gets the categories for the chart.
   * @param {OddsListItemInterface} team - Team for which exchange categories to be retrieved.
   * @return {Array} returns an array of string with the categories.
   */
  getCategories(team: OddsListItemInterface): Array<string> {
    return team.exchanges && team.exchanges[0].history.back_all.map((item) => (item.date));
  }

  /**
   * Renders the chart.
   * @param {OddsListItemInterface} team - Team for which the chart is to be drawn.
   */
  renderChart(team: OddsListItemInterface) {
    if(team) {
      this.options = {
        title: {
          text: 'Best Back Odds for ' + team.name
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
        chart: {
          backgroundColor: '#f5f5f5'
        },
        series: this.getSeriesData(team)
      }
    }
  }

}
