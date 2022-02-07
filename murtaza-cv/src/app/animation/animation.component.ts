import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity:1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open',[
        animate('0.5s')
      ]),

    ]),

    trigger('changeColor', [
      state('first', style({
        color: 'orange'
      })),
      
    ])
  ],
})
export class AnimationComponent implements OnInit {

  isOpen = true;

  isColor = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = ! this.isOpen;
  }
  changeColor(){
    this.isColor = 'blue';
  }

}
