// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './register/register.component';

// const routes: Routes = [
//   { path: 'register', component: RegisterComponent },
//   { path: '', redirectTo: '/register', pathMatch: 'full' } // Default route
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)], // ✅ Make sure RouterModule is imported properly
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DasgboardComponent } from './dasgboard/dasgboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // ✅ Route for Login
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DasgboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
