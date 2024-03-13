import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
  aircraftsList : Aircraft[] | null = null;
  error = null;

  constructor(private aircraftService: AircraftService) { }

  ngOnInit(): void {
  }

  getAllAircrafts() {
    this.aircraftService.getAircrafts().subscribe({
      next: (data) => this.aircraftsList = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getDesignedAircrafts() {
    this.aircraftService.getDesignedAircrafts().subscribe({
      next: (data) => this.aircraftsList = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getDevelopmentAircrafts() {
    this.aircraftService.getDeveloppementAircrafts().subscribe({
      next: (data) => this.aircraftsList = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
}
