import { ProfileComponent } from './profile/profile.component';
import { SeekHelpComponent } from './seek-help/seek-help.component';
import { OfferHelpComponent } from './offer-help/offer-help.component';
import { AskHelpComponent } from './ask-help/ask-help.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPrestationsComponent } from './list-prestations/list-prestations.component';
import { DetailsPrestationComponent } from './details-prestation/details-prestation.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ask-help", component: AskHelpComponent },
  { path: "offer-help", component: OfferHelpComponent },
  { path: "seek-help", component: SeekHelpComponent },
  { path: "prestations", component: ListPrestationsComponent },
  { path: "prestations/details", component: DetailsPrestationComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
