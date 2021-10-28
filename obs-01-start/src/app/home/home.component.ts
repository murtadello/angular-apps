import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    /* this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count)
    }); */
    const customIntervalObservable = Observable.create(observer =>{
      let count = 0;
      setInterval(() =>{
        observer.next(count);
      if(count === 2){
      observer.complete();
      console.log('Completed !');
      
     } 
        if(count > 3){
          observer.error(new Error('Count is greater 3'));
        }
        count++;
      }, 1000);
    });




    this.firstObsSubscription = customIntervalObservable.subscribe((data: number) => {
      console.log('Round: ' + (data + 1));
      
    }, error =>{
      console.log(error);
      alert(error.message);
      
    });

  }
  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }

}
