import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftComponent } from './components/aircraft/aircraft.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateGuard } from './components/authenticate.guard';

const routes: Routes = [
  {
    path: "aircrafts", component: AircraftComponent, canActivate: [AuthenticateGuard]
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
