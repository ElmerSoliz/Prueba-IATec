import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { ValidationRequestRegisterComponent } from './pages/validation-request-register/validation-request-register.component';

const routes: Routes = [
  {
    path: "layout", 
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
