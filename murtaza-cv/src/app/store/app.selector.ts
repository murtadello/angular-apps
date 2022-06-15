import { createSelector } from "@ngrx/store";

export interface FeatureState {
    counter: number;
}

export interface AppState {
    feature: FeatureState
}

export const selectFeatuer = (state: AppState) => state.feature;

export const selectFeatureCounte = createSelector(
    selectFeatuer,
    (state: FeatureState) => state.counter
)