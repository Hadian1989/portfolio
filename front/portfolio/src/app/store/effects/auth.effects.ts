import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as authActions from '../actions/auth.actions';
import { Action } from '@ngrx/store';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  LogIn$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.LogIn),
      exhaustMap((action) =>
        this.authService.login(action).pipe(
        //   tap((user) => {
        //     localStorage.setItem('access', user.access);
        //     localStorage.setItem('refresh', user.refresh);
        //   }),
          map((_) => authActions.LogInSuccess())
        //   catchError(error => of(authActions.LogInFailure({ error })))
        )
      )
    )
  );
}
