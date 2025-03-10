import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DasgboardComponent } from './dasgboard/dasgboard.component';

export const routes: Routes = [{path:'', component:HomeComponent},
        {
            path:'register',component:RegisterComponent
        },
        {path:'login',component:LoginComponent},
        {path:'dasgboard', component:DasgboardComponent}];
