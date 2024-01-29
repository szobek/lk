import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ServicesComponent } from './static/services/services.component';
import { KineziologiaComponent } from './static/services/kineziologia/kineziologia.component';
import { JumpWithFrogsComponent } from './static/services/jump-with-frogs/jump-with-frogs.component';
import { AccessComponent } from './static/services/access/access.component';
import { TattooComponent } from './static/services/tattoo/tattoo.component';
import { PriceComponent } from './static/price/price.component';
// {path:"hello",component:HelloComponent}
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"services",component:ServicesComponent},
  {path:"service/kineziologia",component:KineziologiaComponent},
  {path:"service/ugorjabekakkal",component:JumpWithFrogsComponent},
  {path:"service/accessbars",component:AccessComponent},
  {path:"service/csillamtetovalas",component:TattooComponent},{path:"arlista",component:PriceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
