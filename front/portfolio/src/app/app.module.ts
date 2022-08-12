import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainModule } from './modules/main/main.module';
import { AuthModule } from './modules/authentication/auth.module';
import { RoutingModule } from './modules/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RoutingModule, MainModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
