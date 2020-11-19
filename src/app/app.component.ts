import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('squareBox') squareBox: ElementRef;
  transitionSpeed = 1000; // milisecond

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit = () => {
    this.applySpeed();
  }

  applySpeed = () => {
    this.renderer.setStyle(this.squareBox.nativeElement, 'transition-duration', `${this.transitionSpeed}ms`);
  }

  doTheThing = (event) => {
    const {layerX, layerY} = event;
    this.renderer.setStyle(this.squareBox.nativeElement, 'background', `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    this.renderer.setStyle(this.squareBox.nativeElement, 'top', `${layerY}px`);
    this.renderer.setStyle(this.squareBox.nativeElement, 'left', `${layerX}px`);
  }
}
