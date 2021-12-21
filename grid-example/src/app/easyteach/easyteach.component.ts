import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easyteach',
  templateUrl: './easyteach.component.html',
  styleUrls: ['./easyteach.component.css']
})
export class EasyteachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public value: Date = new Date(2000, 2, 10, 10, 30, 0);

}
