import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum AuthenticateActionsTypes {
    LOGING = "[Authenticate] Loging",
    LOGING_SUCCESS = "[Authenticate] Login Success",
    LOGING_ERROR = "[Authenticate] Login Error",

    LOGOUT = "[Authenticate] Logout",
    LOGOUT_SUCCESS = "[Authenticate] Logout Success",
    LOGOUT_ERROR = "[Authenticate] Logout Error",

    GET_USER_DETAIL = "[Authenticate] Get User Details",
    GET_USER_DETAIL_SUCCESS = "[Authenticate] Get User Detail Success",
    GET_USER_DETAIL_ERROR = "[Authenticate] Get User Detail Error",
}

export class LoginAction implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING;
    constructor(public payload: any) {}
}

export class LoginActionSuccess implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING_SUCCESS;
    constructor(public payload: User) {}
}

export class LoginActionError implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING_ERROR;
    constructor(public payload: string) {}
}

export class LogoutAction implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT;
    constructor(public payload: any) {}
}

export class LogoutActionSuccess implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT_SUCCESS;
    constructor(public payload: any) {}
}

export class LogoutActionError implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT_ERROR;
    constructor(public payload: string) {}
}