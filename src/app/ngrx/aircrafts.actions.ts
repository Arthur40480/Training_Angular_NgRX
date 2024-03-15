import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AICRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",

    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Developed Aircrafts Success",
    GET_DEVELOPMENT_AIRCRAFTS_ERROR = "[Aircrafts] Get Developed Aircrafts Error",

    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_SEARCH_SUCCESS = "[Aircrafts] Get Search Aircrafts Success",
    GET_SEARCH_ERROR = "[Aircrafts] Get Search Aircrafts Error"
}

export class GetAllAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload: any) {}
}

export class GetAllAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
}

export class GetAllAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AICRAFTS_ERROR;
    constructor(public payload: string) {}
}

export class GetDesignedAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload: any) {}
}

export class GetDesignedAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
}

export class GetDesignedAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}
}

export class GetDevelopmentAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload: any) {}
}

export class GetDevelopmentAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
}

export class GetDevelopmentAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
                            GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError 