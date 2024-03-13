import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class AircraftService {

  constructor(private http: HttpClient) { }

  public getAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts");
  }

  public getDesignedAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  public getDeveloppementAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }

  public getAircraftByMsn(id: number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id)
  }
}
