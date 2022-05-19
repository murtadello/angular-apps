import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeTitle } from '../state/counter.actions';
import { getTitle } from '../state/counter.selectors';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css']
})
export class ChangeTitleComponent implements OnInit {
  title$:Observable<string>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.title$ = this.store.select(getTitle);

    
  }

  changeTitles(){
    this.store.dispatch(changeTitle())
  }

}
