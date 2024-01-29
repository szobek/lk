import { Component, Input } from '@angular/core';

@Component({
  selector: 'titleText',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
@Input() title:string=""
}
