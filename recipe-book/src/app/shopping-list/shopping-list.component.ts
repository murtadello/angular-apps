import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients : Observable<{ingredients: Ingredient[]}>;

  private igChangeSubject: Subscription;
  constructor(private slService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit(){
    this.ingredients = this.store.select('shoppingList');
    
  }

  onEditItem(index: number){
    this.slService.startedEditting.next(index);

  }
  ngOnDestroy(){
    
  }
 

}

