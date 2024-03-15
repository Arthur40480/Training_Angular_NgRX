import { Component, OnInit } from '@angular/core';
import { Observable, catchError, startWith, map, filter } from 'rxjs';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { Store } from '@ngrx/store';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selector';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {

  // aircraftsList : Aircraft[] | null = null; OPTION 1 -> tableau d'avions
  aircraftsState$: Observable<AircraftsState> | null = null
  readonly aircraftsStateEnum = AircraftsStateEnum;
  countAlertAircrafts$: Observable<number> | undefined;

  constructor(private store: Store<any>) {
    this.countAlertAircrafts$ = store.select(selectCountAlertAircrafts);
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }
}
