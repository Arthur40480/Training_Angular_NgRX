import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/actions/aircraft.actions';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  value: string = "";

  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS, payload: null})
  }

  getDesignedAircrafts() {
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload: null});
  }

  getDevelopmentAircrafts() {
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload: null});
  }

  onSearch(value: string) {
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload: value})
    console.log("Valeur entrante: " + value)
  }
}
