import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
this.changeImage()

  }
  @Input() slides:{src:string}[] = [{src:""}];

  currentSlide = 0;
  changeImageInterval:any

  inreaseSlide() {
    this.currentSlide++

  }

  changeImage(){
    this.changeImageInterval=setInterval(()=>{
      if(this.currentSlide<this.slides.length-1)this.inreaseSlide()
      else this.currentSlide=0
     },3000)

  }

  stopChange(){
    clearInterval(this.changeImageInterval);
  }

}
