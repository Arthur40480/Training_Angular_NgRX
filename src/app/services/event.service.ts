import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../actions/aircraft.actions';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
  eventSubjectObservable = this.eventSubject.asObservable();

  publishEvent(event: ActionEvent) {
    this.eventSubject.next(event);
  }
  constructor() { }
}
