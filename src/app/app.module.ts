import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './static/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadImageComponent } from './shared/load-image/load-image.component';
import { MenuComponent } from './static/menu/menu.component';
import { AboutComponent } from './static/about/about.component';
import { MainComponent } from './static/main/main.component';
import { ContactComponent } from './static/contact/contact.component';
import { HorizontalLineComponent } from './shared/horizontal-line/horizontal-line.component';
import { CarouselComponent } from './dinamic/carousel/carousel.component';
import { ServicesComponent } from './static/services/services.component';
import { KineziologiaComponent } from './static/services/kineziologia/kineziologia.component';
import { AccessComponent } from './static/services/access/access.component';
import { JumpWithFrogsComponent } from './static/services/jump-with-frogs/jump-with-frogs.component';
import { TattooComponent } from './static/services/tattoo/tattoo.component';
import { PriceComponent } from './static/price/price.component';
import { TitleComponent } from './shared/title/title.component';
import { SharedModule } from './shared/shared.module';
import { UpToTopComponent } from './shared/up-to-top/up-to-top.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoadImageComponent,
    MenuComponent,
    AboutComponent,
    MainComponent,
    ContactComponent,
    HorizontalLineComponent,
    CarouselComponent,
    ServicesComponent,
    KineziologiaComponent,
    AccessComponent,
    JumpWithFrogsComponent,
    TattooComponent,
    PriceComponent,
    TitleComponent,
UpToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MainComponent],exports:[TitleComponent]
})
export class AppModule { }
