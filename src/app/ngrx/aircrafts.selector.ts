import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";

export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),
    (state: AircraftsState) => {
        let total: number = 0;
        console.log(state.aircrafts.filter(a => a.development == true && a.design == true));
        state.aircrafts.forEach(a => {
            if(a.development == true && a.design == true) total++;
        })
        return total;
    }
)