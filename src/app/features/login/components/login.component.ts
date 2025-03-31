import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginValidator } from '../validators/login.validator';
import { AuthResponse } from '../../../core/models/auth-response';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, LoginValidator.passwordStrength]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: AuthResponse) => {
          console.log(response);
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('name', response.name);
          Swal.fire({
            title: 'Inicio de sesión exitoso!',
            text: `Bienvenido a su gestor de tareas`,
            icon: 'success',
            confirmButtonText: 'Continuar',
            timer: 2000,
            timerProgressBar: true,
          });
          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          Swal.fire({
            title: 'Error al iniciar sesion',
            text: `Usuario o contraseña incorrectos`,
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo',
          });
          console.error('Login failed:', error);
        },
      });
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
