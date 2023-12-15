import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ValidationRequestRegisterComponent } from './pages/validation-request-register/validation-request-register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path: "", 
    component: LayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'vacationRequest', component: ValidationRequestRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
