import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AircraftService } from "../services/aircraft.service";
import { Injectable } from "@angular/core";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.actions";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable ()
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions) {}

    getAllAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS), 
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),


                    
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    )
}