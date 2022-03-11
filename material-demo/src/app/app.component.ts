import { Component } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  showSpinner = false;
  opened = false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  onChange($event:any){
    console.log($event);
  }
  loadData(){
    this.showSpinner = true ;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
