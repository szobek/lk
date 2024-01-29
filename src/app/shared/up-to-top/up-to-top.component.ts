import { Component } from '@angular/core';

@Component({
  selector: 'up-to-top',
  templateUrl: './up-to-top.component.html',
  styleUrls: ['./up-to-top.component.scss']
})
export class UpToTopComponent {
  moveToTop(){
    scroll(0,0)
  }
}
