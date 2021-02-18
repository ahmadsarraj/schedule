import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArabicComponent } from './arabic/arabic.component';
import { BiologieComponent } from './biologie/biologie.component';
import { ChimieComponent } from './chimie/chimie.component';
import { FrancaisComponent } from './francais/francais.component';
import { HomeComponent } from './home/home.component';
import { MathComponent } from './math/math.component';
import { PhysiqueComponent } from './physique/physique.component';
import { ReligionComponent } from './religion/religion.component';

const routes: Routes = [
  { path: 'Math', component: MathComponent },
  { path: 'Arabic', component: ArabicComponent },
  { path: 'Francais', component: FrancaisComponent },
  { path: 'Biologie', component: BiologieComponent },
  { path: 'Physique', component: PhysiqueComponent },
  { path: 'Chimie', component: ChimieComponent },
  { path: 'Religion', component: ReligionComponent },
  { path: 'Home', component: HomeComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
