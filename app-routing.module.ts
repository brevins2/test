import { UpdateDataComponent } from './update-data/update-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegistrationComponent,
    path: 'registration'
  },
  {
    component: ContactComponent,
    path: 'content'
  },
  {
    component: UpdateDataComponent,
    path: 'update/: id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
