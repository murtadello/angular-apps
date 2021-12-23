import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  english: string ="English B2";
  deutsch: string ="Deutsch C1";
  persisch: string = "Muttersprache";

  constructor() { }

  ngOnInit(): void {
  }

}
