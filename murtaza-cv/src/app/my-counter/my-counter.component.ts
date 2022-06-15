import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { increment, decrement, reset } from "../store/app.actions";
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$ : Observable<number>;

  constructor(private store: Store<{count:number}>) { 
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {
  }
  increment(){
    this.store.dispatch(increment())

  }
  decrement(){
    this.store.dispatch(decrement())

  }
  reset(){
    this.store.dispatch(reset())
    
  }

}
