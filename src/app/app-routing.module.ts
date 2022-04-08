import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingUpComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
