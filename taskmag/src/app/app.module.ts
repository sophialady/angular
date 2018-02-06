import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRootingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from 'app/login/login.module';
import { ElModule } from 'element-angular'
// import module



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRootingModule,
    CoreModule,
    LoginModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
