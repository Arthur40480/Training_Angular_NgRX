import { Action } from "@ngrx/store";
import { Operation } from "../model/operation.model";

export enum OperationActionsTypes {
    ADD_OPERATION = "[Operation] Add One",
    ADD_OPERATION_SUCCESS = "[Operation] Add One Success",
    ADD_OPERATION_ERROR = "[Operation] Add One Error",

    REMOVE_OPERATION = "[Operation] Remove One",
    REMOVE_OPERATION_SUCCESS = "[Operation] Remove One Success",
    REMOVE_OPERATION_ERROR = "[Operation] Remove One Error"
}

export class AddOperationAction implements Action {
    type: OperationActionsTypes = OperationActionsTypes.ADD_OPERATION;
    constructor(public payload: Operation) {}
}

export class AddOperationActionSuccess implements Action {
    type: OperationActionsTypes = OperationActionsTypes.ADD_OPERATION_SUCCESS;
    constructor(public payload: any) {}
}

export class AddOperationActionError implements Action {
    type: OperationActionsTypes = OperationActionsTypes.ADD_OPERATION_ERROR;
    constructor(public payload: string) {}
}

export class RemoveOperactionAction implements Action {
    type: OperationActionsTypes = OperationActionsTypes.REMOVE_OPERATION;
    constructor(public payload: Operation) {}
}

export class RemoveOperactionActionSuccess implements Action {
    type: OperationActionsTypes = OperationActionsTypes.REMOVE_OPERATION_SUCCESS;
    constructor(public payload: any) {}
}

export class RemoveOperactionActionError implements Action {
    type: OperationActionsTypes = OperationActionsTypes.REMOVE_OPERATION_ERROR;
    constructor(public payload: string) {}
}