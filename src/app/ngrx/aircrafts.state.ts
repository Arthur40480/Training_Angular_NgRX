import { EntityState } from "@ngrx/entity";
import { Aircraft } from "../model/aircraft.model";
import { Operation } from "../model/operation.model";

export enum AircraftsStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AircraftsState extends EntityState<Operation>{
    aircrafts: Aircraft[],
    errorMessage: string,
    dataState: AircraftsStateEnum,
    isLogin: boolean
}

export const initState: AircraftsState = {
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    isLogin: false,
    ids: [],
    entities: {}
}