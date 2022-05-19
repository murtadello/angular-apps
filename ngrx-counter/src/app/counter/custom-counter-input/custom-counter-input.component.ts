import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeChannelName, customincrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$:Observable<string>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd(){
    this.store.dispatch(customincrement({count: +this.value}))
  }
  onChangChannelName(){
    this.store.dispatch(changeChannelName());
  } 
}
