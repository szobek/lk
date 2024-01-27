import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
   setInterval(()=>{
    if(this.currentSlide<this.slides.length-1)this.currentSlide++
    else this.currentSlide=0
   },3000)
  }
  @Input() slides:{src:string}[] = [{src:""}];

  currentSlide = 0;

}
