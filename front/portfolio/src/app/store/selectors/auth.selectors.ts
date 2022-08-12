import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authState } from '../reducers/auth.reducers';


export const getAuthState = createFeatureSelector<authState>('auth');

export const getIsRefreshingAccToken = createSelector(
  getAuthState,
  (authState: authState) => authState.isRefreshingAccToken
);
export const getIsUserAuthenticated = createSelector(
  getAuthState,
  (authState: authState) => authState.isAuthenticated
);
