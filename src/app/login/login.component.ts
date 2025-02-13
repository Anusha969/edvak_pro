/*import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
------------------------*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[FormsModule , CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly!';
      return;
    }

    this.isLoading = true;
    this.errorMessage = ''; // Clear previous errors

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        alert('Login Successful!');
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Invalid email or password';
        this.isLoading = false;
      }
    });
  }
}
