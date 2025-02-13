import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // ✅ Import ReactiveFormsModule
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule]  // ✅ Add both modules here
})
export class RegisterModule {}
