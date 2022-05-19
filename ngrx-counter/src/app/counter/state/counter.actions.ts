import { createAction, props } from "@ngrx/store";


export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const update = createAction('update');

export const customincrement = createAction('customincrement', props<{count:number}>());

export const changeChannelName = createAction('changeChannelName');

export const changeTitle = createAction('changetitle');
