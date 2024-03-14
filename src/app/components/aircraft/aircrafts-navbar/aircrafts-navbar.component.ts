import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/actions/aircraft.actions';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  value: string = "";

  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.eventService.publishEvent({type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS, payload: null})
  }

  getDesignedAircrafts() {
    this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload: null});
  }

  getDevelopmentAircrafts() {
    this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload: null});
  }

  onSearch(value: string) {
    this.eventService.publishEvent({type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload: value});
  }
}
