import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Import here

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,         // ✅ Required for [(ngModel)]
    ReactiveFormsModule  // ✅ Required for [formGroup] and formControlName
  ]
})
export class LoginModule { }
