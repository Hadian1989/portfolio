import { NgModule } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/auth/auth.gaurd';
import { AuthService } from 'src/app/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/auth/token.interceptor';

@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  imports: [],
})
export class AuthModule {}
