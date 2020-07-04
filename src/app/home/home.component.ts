import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild("slider") slider: ElementRef<any>;
  isMouseDown: boolean;
  clickedPoint: number;
  scrollLeft: number;
  //startX: number;

  constructor() { 
  }

  ngOnInit(): void {
  }

  mousePress(e: any){
    this.isMouseDown = true;
    this.clickedPoint = e.clientX;
    this.slider.nativeElement.classList.add('active');
    //this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  mouseRelease(e: any){
    this.slider.nativeElement.classList.remove('active');
    this.isMouseDown = false;
  }

  mouseMove(e: any){
    if(this.isMouseDown){
      //const x = e.pageX - this.slider.nativeElement.offsetLeft;
      //const walk = (x - this.startX) * 3;
      //this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
      const disDir = (this.clickedPoint - e.clientX) * 2;
      //console.log(this.clickedPoint + "  " + e.clientX)
      //console.log(this.scrollLeft)
      this.slider.nativeElement.scrollLeft = this.scrollLeft + disDir;
    }
  }
}
