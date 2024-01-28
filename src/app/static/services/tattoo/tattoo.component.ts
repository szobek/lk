import { Component } from '@angular/core';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss']
})
export class TattooComponent {
  public slides = [
    {src: "../../../assets/csillam/1.jpg" },
    {src:"../../../assets/csillam/2.jpg"},
    {src:"../../../assets/csillam/3.jpg"},
    {src:"../../../assets/csillam/4.jpg"},
    {src:"../../../assets/csillam/5.png"},
  ];
}
