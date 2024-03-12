import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class AircraftService {

  constructor(private http: HttpClient) { }

  public getAircrafts() : Observable<Aircraft[]> {
    let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host + "/aircraft");
  }

  public getDesignedAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  public getDeveloppementAircrafts() : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircraft/developpment=true");
  }

  public getAircraftByMsn(id: number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircraft/" + id)
  }
}
