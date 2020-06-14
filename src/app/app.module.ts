import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AskHelpComponent } from './ask-help/ask-help.component';
import { OfferHelpComponent } from './offer-help/offer-help.component';
import { SeekHelpComponent } from './seek-help/seek-help.component';
import { ListPrestationsComponent } from './list-prestations/list-prestations.component';
import { DetailsPrestationComponent } from './details-prestation/details-prestation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    AskHelpComponent,
    OfferHelpComponent,
    SeekHelpComponent,
    ListPrestationsComponent,
    DetailsPrestationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
