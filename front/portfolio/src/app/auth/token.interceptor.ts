import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing=false;
  private accessTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(public authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.get('skip')) {
      let pureRequest = request.clone({
        headers: request.headers.delete('skip'),
      });
      return next.handle(pureRequest);
    }
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      // this.store.dispatch(RefreshToken())
      return this.authService.refreshToken().pipe(
        switchMap((token: { access: string }) => {
          // this.store.dispatch(RefreshTokenSuccess({ newToken: token.access }))
          this.accessTokenSubject.next(token.access);
          return next.handle(this.addToken(request, token.access));
        }),
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401 || error.status === 400) {
              // this.store.dispatch(LogOut())
          }
          return throwError(error);
        })
      );
    } else {
      return this.accessTokenSubject.pipe(
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }
}
