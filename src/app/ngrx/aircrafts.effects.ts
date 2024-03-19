import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AircraftService } from "../services/aircraft.service";
import { AuthenticateService } from "../services/authenticate.service";
import { Injectable } from "@angular/core";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopmentAircraftsActionError, GetDevelopmentAircraftsActionSuccess, GetSearchAircraftsAction, GetSearchAircraftsActionError, GetSearchAircraftsActionSuccess } from "./aircrafts.actions";
import { Observable, catchError, map, mergeMap, of, tap } from "rxjs";
import { Action } from "@ngrx/store";
import { AuthenticateActionsTypes, LoginAction, LoginActionError, LoginActionSuccess } from "./authenticate.action";

@Injectable ()
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private authenticateService: AuthenticateService, private effectActions: Actions) {}
    
    getUserEffect : Observable<Action> = createEffect(
        () =>this.effectActions.pipe(
            ofType(AuthenticateActionsTypes.LOGING),
            mergeMap((action : LoginAction) => {
                return this.authenticateService.getUser(action.payload).pipe(
                    map((user) => {
                        if(Array.isArray(user) && user.length === 0) {
                            return new LoginActionError("Password ou email invalide")
                        }else {
                            return new LoginActionSuccess(user)
                        }
                    }),
                    catchError((err) => of(new LoginActionError(err.message)))
                )
            })

        )
    )
    
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

    getAircraftsDesignedEffectc: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        )
    )

    getAircraftsDevelopmentEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDeveloppementAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
        )
    )

    getSearchAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS),
            mergeMap((action: GetSearchAircraftsAction) => {
                return this.aircraftService.getAircraftByKeyword(action.payload).pipe(
                    map((aircrafts) => new GetSearchAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetSearchAircraftsActionError(err.message)))
                )
            })
        )
    )
}