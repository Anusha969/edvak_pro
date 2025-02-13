// import { Component } from '@angular/core';
// import { Router } from '@angular/router'; // ✅ Import Router

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   constructor(private router: Router) {}

//   goToLogin() {
//     this.router.navigate(['/login']);  // ✅ Redirect to Login
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    console.log('User logged out');
    this.router.navigate(['/login']);  // Redirect to login after logout
  }

  gotoLogin(){
    console.log("user going to login")
    this.router.navigate(["/login"])
  }
}
