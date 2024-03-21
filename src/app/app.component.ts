import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLogin } from './ngrx/authenticate.selector';
import { LogoutAction, LogoutActionSuccess } from './ngrx/authenticate.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airbus-app-ngrx';
  isLogin$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLogin$ = store.select(selectIsLogin);
  }

  logout() {
    this.store.dispatch(new LogoutActionSuccess({}))
  }

}
