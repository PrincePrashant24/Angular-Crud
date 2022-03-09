import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrecordsComponent } from './allrecords/allrecords.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'allrecords', component: AllrecordsComponent },
  { path: 'edit/:id', component: UpdateComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
