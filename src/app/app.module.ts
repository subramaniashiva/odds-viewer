import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OddsListComponent } from './components/odds-list/odds-list.component';
import { OddsListItemComponent } from './components/odds-list-item/odds-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OddsListComponent,
    OddsListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
