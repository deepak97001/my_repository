import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DFitZoneComponent } from './d-fit-zone/d-fit-zone.component';
import { PageFactsComponent } from './d-fit-zone/page-facts/page-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    DFitZoneComponent,
    PageFactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
