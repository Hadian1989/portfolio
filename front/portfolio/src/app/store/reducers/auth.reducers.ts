import  * as authActions  from '../actions/auth.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface authState {
  isAuthenticated: boolean;
  errorMessage: string | null;
  isRefreshingAccToken: boolean;
}

export const initialState: authState = {
  isAuthenticated: false,
  errorMessage: null,
  isRefreshingAccToken: false,
};
const reducer = createReducer(
    initialState,
    on(authActions.LogIn, state => state),
    on(authActions.LogInSuccess, (state: authState) => {
      return { ...state, isAuthenticated: true, errorMessage: null};
    }),
    on(authActions.LogInFailure, (state: authState, { error }) => {
      return { ...state, isAuthenticated: false, errorMessage: error };
    }),
    on(authActions.LogOut, (state: authState) => {
      return { ...state, isAuthenticated:false, errorMessage: null, isRefreshingAccToken: false };
    }),
    on(authActions.RefreshToken, (state: authState) => {
      return { ...state, isRefreshingAccToken: true};
    }),
    on(authActions.RefreshTokenSuccess, (state: authState) => {
      return { ...state, isRefreshingAccToken: false };
    })
  );
  
  export function AuthReducer(state: authState | undefined, action: Action) {
    return reducer(state, action);
  }
  