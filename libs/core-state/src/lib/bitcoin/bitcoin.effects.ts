import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { USD } from "@bitcoin/api-interfaces";
import { BitcoinsService } from "@bitcoin/core-data";
import * as USDActions from './bitcoin.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class USDEffects{
    loadUSD$ = createEffect(() =>
        this.actions$.pipe(
            ofType(USDActions.loadUSD),
            fetch({
                run: (action) =>
                    this.bitcoinsService
                        .getOne(action.usdId)
                        .pipe(map((usd: USD) => USDActions.loadUSDSuccess({ usd }))),
                    onError: (action, error) => USDActions.loadUSDFailed({ error })    
            })
        ));
    loadUSDs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(USDActions.loadUSDs),
            fetch({
                run: () =>
                    this.bitcoinsService
                    .getAll()
                    .pipe(
                        map((usds: USD) => USDActions.loadUSDsSuccess({ usds }))
                    ),
                onError: (action, error) => USDActions.loadUSDsFailed({ error })    
            })
        ));
    //     createUSD$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(USDActions.createUSD),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.bitcoinsService
    //                     .create(action.usd)
    //                     .pipe(map((usd: USD) => USDActions.createUSDSuccess({ usd }))),
    //                 onError: (action, error) => USDActions.createUSDFailed({ error })    
    //         })
    // ));

    // updateUSD$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(USDActions.updateUSD),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.bitcoinsService
    //                     .update(action.usd)
    //                     .pipe(map((usd: USD) => USDActions.updateUSDSuccess({ usd}))),
    //                 onError: (action, error) => USDActions.updateUSDFailed({ error })    
    //         })
    // ));

    // deleteUSD$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(USDActions.deleteUSD),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.bitcoinsService
    //                     .delete(action.usd)
    //                     .pipe(
    //                         map(() => USDActions.deleteUSDSuccess({ usd: action.usd }))
    //                     ),
    //                 onError: (action, error) => USDActions.deleteUSDFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private bitcoinsService: BitcoinsService
    ) {}    
}