import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  public getUser(user: User) : Observable<User> {
    console.log("email:" + user.email + "    paswword:" + user.password);
    return this.http.get<User>(environment.host + "/users?email=" + user.email + "&password=" + user.password);
  }
}
