import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DasgboardComponent } from './dasgboard/dasgboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports : [DasgboardComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fixed 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'myapp';
}
