import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftsActionsTypes, GetAllAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  value: string = "";

  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDesignedAircrafts() {
    // this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload: null});
  }

  getDevelopmentAircrafts() {
    // this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload: null});
  }

  onSearch(value: string) {
    // this.eventService.publishEvent({type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload: value});
  }
}
