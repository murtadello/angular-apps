import { Component } from '@angular/core';
import { AcountsService } from './acounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: {name:string, status: string}[] = [];
  //lets inject the service to our component
  constructor(private accountService: AcountsService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
