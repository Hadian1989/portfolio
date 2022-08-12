import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import {
  RouterReducerState,
  MinimalRouterStateSnapshot,
  DEFAULT_ROUTER_FEATURENAME,
  getSelectors,
} from '@ngrx/router-store';
import { select, Store, createFeatureSelector } from '@ngrx/store';

export const selectRouter = createFeatureSelector<
  RouterReducerState<MinimalRouterStateSnapshot>
>(DEFAULT_ROUTER_FEATURENAME);

export const {
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors(selectRouter);

@Injectable()
export class AppEffects {
  id: string;

  constructor(private actions$: Actions, private store: Store) {
    this.store.pipe(
      select(selectRouteParams),
      tap((fromPipeTap) => console.log({ fromPipeTap })) // logs undefined
    );
  }
}
