import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import { AppComponent } from './app.component';
import { OddsListComponent } from './components/odds-list/odds-list.component';
import { OddsListItemComponent } from './components/odds-list-item/odds-list-item.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OddsListComponent,
    OddsListItemComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [{
    provide: HighchartsStatic,
    useValue: highcharts
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
