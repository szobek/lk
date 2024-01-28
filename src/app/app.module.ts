import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './static/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadImageComponent } from './static/load-image/load-image.component';
import { MenuComponent } from './static/menu/menu.component';
import { AboutComponent } from './static/about/about.component';
import { MainComponent } from './static/main/main.component';
import { ContactComponent } from './static/contact/contact.component';
import { HorizontalLineComponent } from './static/horizontal-line/horizontal-line.component';
import { CarouselComponent } from './dinamic/carousel/carousel.component';
import { ServicesComponent } from './static/services/services.component';
import { KineziologiaComponent } from './static/services/kineziologia/kineziologia.component';
import { AccessComponent } from './static/services/access/access.component';
import { JumpWithFrogsComponent } from './static/services/jump-with-frogs/jump-with-frogs.component';
import { TattooComponent } from './static/services/tattoo/tattoo.component';

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
    TattooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
