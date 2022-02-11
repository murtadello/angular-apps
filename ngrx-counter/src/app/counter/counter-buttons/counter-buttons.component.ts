import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, update } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
 ;
  constructor(private store: Store<{counter: CounterState}>) { }

  ngOnInit(): void {
  }
  onIncrement(){
    //dispatch 
    this.store.dispatch(increment()) // calling an action by dispatching 

  }
  onDecrement(){
    this.store.dispatch(decrement()) // calling an action by dispatching 
    
  } 
  onReset(){
    this.store.dispatch(reset()) // calling an action by dispatching 

  }
  onUpdate(){
    this.store.dispatch(update())
  }

}
