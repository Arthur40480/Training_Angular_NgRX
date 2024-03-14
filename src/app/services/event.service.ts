import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AircraftsActions } from '../ngrx/aircrafts.actions';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSubject : Subject<AircraftsActions> = new Subject<AircraftsActions>();
  eventSubjectObservable = this.eventSubject.asObservable();

  publishEvent(event: AircraftsActions) {
    this.eventSubject.next(event);
  }
  constructor() { }
}
