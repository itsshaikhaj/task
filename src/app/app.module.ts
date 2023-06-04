import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    TransactionsComponent,
    MyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
