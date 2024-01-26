import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.scss']
})
export class LoadImageComponent implements OnInit {
@Input() source:string = "";
constructor(){

}
  ngOnInit(): void {
    this.source = "../assets/"+this.source
  }

}
