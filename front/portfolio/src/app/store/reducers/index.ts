import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { AuthReducer, authState } from './auth.reducers';

export interface State {
  auth: authState;
}

export const reducers: ActionReducerMap<State> = {
  auth: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
