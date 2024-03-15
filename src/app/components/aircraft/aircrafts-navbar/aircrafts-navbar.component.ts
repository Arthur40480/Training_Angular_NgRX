import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, GetSearchAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

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
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts() {
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }

  onSearch(value: string) {
    this.store.dispatch(new GetSearchAircraftsAction(value))
  }
}
