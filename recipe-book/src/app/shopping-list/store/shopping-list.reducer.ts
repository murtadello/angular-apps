
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.action'
const initialState = {
     Ingredients: [
        new Ingredient ('Apple', 5),
        new Ingredient('Tomatos', 10)
    ]
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:[...state.Ingredients, action.payload]
            };

        case ShoppingListActions.ADD_INGREDIENTS:
            return{
                ...state,
                Ingredients: [...state.Ingredients, action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENTS:
            
            return {
                ...state,
                ingredients:[]
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            
            return {
                ...state,
                
            }
        
            default:
                return state;
    }
}