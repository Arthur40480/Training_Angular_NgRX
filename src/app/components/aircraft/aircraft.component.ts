import { Component, OnInit } from '@angular/core';
import { Observable, catchError, startWith, map, filter } from 'rxjs';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  // aircraftsList : Aircraft[] | null = null; OPTION 1 -> tableau d'avions
  aircraftsState$: Observable<AircraftsState> | null = null
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

  // onActionEvent($actionEvent: ActionEvent) {
  //   switch($actionEvent.type) {
  //     case AircraftsActionsTypes.GET_ALL_AIRCRAFTS :
  //       this.getAllAircrafts();
  //       break;

  //     case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS : 
  //       this.getDesignedAircrafts();
  //       break;

  //     case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS :
  //       this.getDevelopmentAircrafts();
  //       break;

  //     case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS : 
  //     this.searchAircraftsByKeyword($actionEvent.payload)
  //       break;
      
  //   }
  // }

  // getAllAircrafts() {
  //   this.aircraftsState$ = this.aircraftService.getAircrafts().pipe(
  //     map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }

  // getDesignedAircrafts() {
  //   this.aircraftsState$ = this.aircraftService.getDesignedAircrafts().pipe(
  //     map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }

  // getDevelopmentAircrafts() {
  //   this.aircraftsState$ = this.aircraftService.getDeveloppementAircrafts().pipe(
  //     map((data: Aircraft[]) => ({ dataState: DataStateEnum.LOADED, data: data })),
  //     startWith({ dataState: DataStateEnum.LOADING }),
  //     catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
  //   );
  // }

  // searchAircraftsByKeyword(payload: any) {
  //   this.aircraftsState$ = this.aircraftService.getAircraftByKeyword(payload).pipe(
  //     map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }
}
