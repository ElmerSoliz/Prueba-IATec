import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isValuesEmpty: boolean = true;

  constructor(private authService: AuthService,private router: Router ,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        data => {
          this.router.navigate(['/layout/register']);
        },
        error => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }

  checkValuesEmpty() {
    this.isValuesEmpty = this.loginForm.invalid;
  }
}
