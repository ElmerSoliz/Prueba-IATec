import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
  
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;
  
      this.authService.login(email, password).subscribe(
        (data) => {
          const token = data.acces_token;
          if (token) {
            localStorage.setItem('token', token);
            this.router.navigate(['/layout']);
          } else {
            console.error('Error en el inicio de sesión: Token no disponible en la respuesta.');
          }
        },
        (error) => {
          console.error('Error en el inicio de sesión:', error);
        }
      );
    }
  }  
}
