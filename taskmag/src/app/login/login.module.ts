import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { LoginRoutingModule } from 'app/login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotComponent]
})
export class LoginModule { }
