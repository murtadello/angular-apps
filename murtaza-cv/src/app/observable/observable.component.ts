import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  orderStatus : any;
  data: Observable<any>;
  data2: Observable<any>;

  data3: Observable<any>

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer =>{
      setTimeout(() => {
        observer.next('In Progress');
      }, 4000);
      // Business logic comes here
      setTimeout(() => {
        observer.next('Processing');
      }, 5000);
      setTimeout(() => {
        observer.next('After Completion');
      }, 12000);
    });


    this.data.subscribe(val =>{
      this.orderStatus = val;
    });
    this.data2.subscribe(val2 =>{
      this.orderStatus = val2;
      
    });
    this.data3.subscribe(val3 =>{
      this.orderStatus = val3;

    })


  }

}
