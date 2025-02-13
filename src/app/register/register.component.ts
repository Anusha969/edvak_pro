// // import { Component } from '@angular/core';
// // import { NavbarComponent } from '../navbar/navbar.component';
// // import { LoginComponent } from '../login/login.component';

// // @Component({
// //   selector: 'app-register',
// //   imports: [],
// //   templateUrl: './register.component.html',
// //   styleUrl: './register.component.css'
// // })
// // export class RegisterComponent {


// /*
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registerForm = this.fb.group({
//       first_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       last_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*\\W)(?=.*\\d).*$')]]
//     });
//   }

//   register() {
//     if (this.registerForm.valid) {
//       this.authService.register(this.registerForm.value).subscribe({
//         next: (res) => alert('Registration successful!'),
//         error: (err) => alert(err.error.message || 'Registration failed')
//       });
//     }
//   }
// }
// */
// /*import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';  // ✅ Import this
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,  // ✅ Make it standalone
//   imports: [CommonModule, ReactiveFormsModule],  // ✅ Import required modules
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registerForm = this.fb.group({
//       first_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       last_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*\\W)(?=.*\\d).*$')]]
//     });
//   }

//   register() {
//     if (this.registerForm.valid) {
//       this.authService.register(this.registerForm.value).subscribe({
//         next: (res) => alert('Registration successful!'),
//         error: (err) => alert(err.error.message || 'Registration failed')
//       });
//     }
//   }
// }
// */

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registerForm = this.fb.group({
//       first_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       last_name: ['', [Validators.required, Validators.maxLength(35), Validators.pattern('^[A-Za-z].*')]],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(8),
//           Validators.pattern('^(?=.*[A-Z])(?=.*\\W)(?=.*\\d).*$')
//         ]
//       ]
//     });
//   }

//   register() {
//     if (this.registerForm.valid) {
//       this.authService.register(this.registerForm.value).subscribe({
//         next: (res) => alert('Registration successful!'),
//         error: (err) => alert(err.error.message || 'Registration failed')
//       });
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
