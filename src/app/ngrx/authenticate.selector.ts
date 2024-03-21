import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";

export const selectIsLogin = createSelector(
    createFeatureSelector('airbusState'),
    (state: AircraftsState) => {
        return state.isLogin
    }
)