import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainModule } from './modules/main/main.module';
import { AuthModule } from './modules/authentication/auth.module';
import { RoutingModule } from './modules/routing/routing.module';
import { reducers, metaReducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
  declarations: [AppComponent, LoadingComponent, NavbarComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    MainModule,
    AuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects, AuthEffects]),
     StoreRouterConnectingModule.forRoot({stateKey : 'router'})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
