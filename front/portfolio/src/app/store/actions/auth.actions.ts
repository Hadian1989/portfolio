import { createAction, props } from '@ngrx/store';

export const LogIn = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const LogInSuccess = createAction('[Auth] Login Success');

export const LogInFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const LogOut = createAction('[Auth] Logout');

export const RefreshToken = createAction('[Auth] Refresh Token');

export const RefreshTokenSuccess = createAction(
  '[Auth] Refresh Token Success',
  props<{ newToken: string }>()
);
