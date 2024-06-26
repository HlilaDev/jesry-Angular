import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { RandomBookComponent } from './random-book/random-book.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RandomQuoteComponent,
    RandomBookComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
