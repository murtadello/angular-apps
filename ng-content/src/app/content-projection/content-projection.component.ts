import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
  @ContentChild('admin')
  adminTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
