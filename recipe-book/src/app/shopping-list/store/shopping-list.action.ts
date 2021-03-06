import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENT ='DELETE_INGREDIENT';



export class AddIngredient implements Action {
     readonly type = ADD_INGREDIENTS;
     
     constructor(public payload: Ingredient){}
}


export class UpdateIngredient implements Action {
     readonly type = UPDATE_INGREDIENTS;
     
     constructor(public payload: {index: number, ingredient: Ingredient}){}
}

export class DeleteIngredients implements Action {
     readonly type = DELETE_INGREDIENT;
     constructor(public payload: number){}

}


export type ShoppingListActions = AddIngredient  | UpdateIngredient | DeleteIngredients;
