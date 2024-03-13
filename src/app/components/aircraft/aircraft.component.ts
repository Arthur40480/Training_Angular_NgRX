import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, catchError, startWith, map } from 'rxjs';
import { AppDataState } from 'src/app/state/aircraft.state';
import { DataStateEnum } from 'src/app/state/aircraft.state';
import { of } from 'rxjs';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  // aircraftsList : Aircraft[] | null = null; OPTION 1 -> tableau d'avions
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;

  constructor(private aircraftService: AircraftService) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADING, data: data})),
      startWith({dataState: DataStateEnum.LOADED}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
    // this.aircraftService.getAircrafts().subscribe({
    //   next: (data) => this.aircraftsList = data,
    //   error: (err) => this.error = err.message,
    //   complete: () => this.error = null
    // })
  }

  getDesignedAircrafts() {
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
      map((data: Aircraft[]) => ({dataState: DataStateEnum.LOADING, data: data})),
      startWith({dataState: DataStateEnum.LOADED}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  //   // this.aircraftService.getDesignedAircrafts().subscribe({
  //   //   next: (data) => this.aircraftsList = data,
  //   //   error: (err) => this.error = err.message,
  //   //   complete: () => this.error = null
  //   // })
  }

  getDevelopmentAircrafts() {
    this.aircrafts$ = this.aircraftService.getDeveloppementAircrafts().pipe(
      map((data: Aircraft[]) => ({ dataState: DataStateEnum.LOADING, data: data })),
      startWith({ dataState: DataStateEnum.LOADED }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    );
  //   this.aircraftService.getDeveloppementAircrafts().subscribe({
  //     next: (data) => this.aircraftsList = data,
  //     error: (err) => this.error = err.message,
  //     complete: () => this.error = null
  //   })
  }
}




