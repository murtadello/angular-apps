import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

 
  constructor(private store: Store<{counter: {counter:CounterState}}>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment())

  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }

}
