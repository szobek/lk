import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { UpToTopComponent } from './up-to-top/up-to-top.component';
import { TitleComponent } from './title/title.component';
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component';
import { LoadImageComponent } from './load-image/load-image.component';



@NgModule({
  declarations: [
    HelloComponent,
    UpToTopComponent,
    TitleComponent,
    HorizontalLineComponent,
    LoadImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UpToTopComponent,
    TitleComponent,
    HorizontalLineComponent,
    LoadImageComponent]
})
export class SharedModule { }
