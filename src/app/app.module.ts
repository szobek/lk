import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './static/home/home.component';
import { MenuComponent } from './static/menu/menu.component';
import { AboutComponent } from './static/about/about.component';
import { MainComponent } from './static/main/main.component';
import { ContactComponent } from './static/contact/contact.component';
import { ServicesComponent } from './static/services/services.component';
import { KineziologiaComponent } from './static/services/kineziologia/kineziologia.component';
import { AccessComponent } from './static/services/access/access.component';
import { JumpWithFrogsComponent } from './static/services/jump-with-frogs/jump-with-frogs.component';
import { TattooComponent } from './static/services/tattoo/tattoo.component';
import { PriceComponent } from './static/price/price.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './static/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutComponent,
    MainComponent,
    ContactComponent,
    ServicesComponent,
    KineziologiaComponent,
    AccessComponent,
    JumpWithFrogsComponent,
    TattooComponent,
    PriceComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
