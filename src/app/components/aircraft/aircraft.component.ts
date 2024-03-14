import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, catchError, startWith, map, filter } from 'rxjs';
import { AppDataState } from 'src/app/state/aircraft.state';
import { DataStateEnum } from 'src/app/state/aircraft.state';
import { of } from 'rxjs';
import { Laboratory } from 'src/app/laboratory';
import { ActionEvent, AircraftsActionsTypes } from 'src/app/actions/aircraft.actions';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  // aircraftsList : Aircraft[] | null = null; OPTION 1 -> tableau d'avions
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;

  constructor(private aircraftService: AircraftService, private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.eventSubjectObservable.subscribe((actionEvent: ActionEvent) => {
      this.onActionEvent(actionEvent);
    })
  }

  onActionEvent($actionEvent: ActionEvent) {
    switch($actionEvent.type) {
      case AircraftsActionsTypes.GET_ALL_AIRCRAFTS :
        this.getAllAircrafts();
        break;

      case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS : 
        this.getDesignedAircrafts();
        break;

      case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS :
        this.getDevelopmentAircrafts();
        break;

      case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS : 
      this.searchAircraftsByKeyword($actionEvent.payload)
        break;
      
    }
  }

  getAllAircrafts() {
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  getDesignedAircrafts() {
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
      map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  getDevelopmentAircrafts() {
    this.aircrafts$ = this.aircraftService.getDeveloppementAircrafts().pipe(
      map((data: Aircraft[]) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    );
  }

  searchAircraftsByKeyword(payload: any) {
    this.aircrafts$ = this.aircraftService.getAircraftByKeyword(payload).pipe(
      map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }
}
