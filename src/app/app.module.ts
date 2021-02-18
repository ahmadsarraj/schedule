import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { TableComponent } from './table/table.component';
import { MathComponent } from './math/math.component';
import { FrancaisComponent } from './francais/francais.component';
import { PhysiqueComponent } from './physique/physique.component';
import { ChimieComponent } from './chimie/chimie.component';
import { BiologieComponent } from './biologie/biologie.component';
import { ReligionComponent } from './religion/religion.component';
import { ArabicComponent } from './arabic/arabic.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    TableComponent,
    MathComponent,
    FrancaisComponent,
    PhysiqueComponent,
    ChimieComponent,
    BiologieComponent,
    ReligionComponent,
    ArabicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
