import { Action } from "@ngrx/store";

export enum AuthenticateActionsTypes {
    LOGING = "[Authenticate] Loging",
    LOGING_SUCCESS = "[Authenticate] Login Success",
    LOGING_ERROR = "[Authenticate] Login Error",

    LOGOUT = "[Authenticate] Logout",

    GET_USER_DETAIL = "[Authenticate] Get User Details",
    GET_USER_DETAIL_SUCCESS = "[Authenticate] Get User Detail Success",
    GET_USER_DETAIL_ERROR = "[Authenticate] Get User Detail Error",
}