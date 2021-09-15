import { Injectable } from "@angular/core";
import { USD } from "@bitcoin/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as BitcoinActions from './bitcoin.actions';
import * as BitcoinSelectors from './bitcoin.selectors';
import * as fromBitcoins from './bitcoin.reducer';


@Injectable({
    providedIn: 'root'
})

export class BitcoinFacade {
    allBitcoins$ = this.store.pipe(
        map((state) => BitcoinSelectors.getAllBitcoins(state)),
    )
    selectedBitcoins$ = this.store.pipe(select(BitcoinSelectors.getSelectedBitcoin));
    loaded$ = this.store.pipe(select(BitcoinSelectors.getBitcoinsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === BitcoinActions.createUSD({} as any) .type ||
        action.type === BitcoinActions.updateUSD({} as any) .type ||
        action.type === BitcoinActions.deleteUSD({} as any) .type
        ))

        selectBitcoin(usdId: string) {
            this.dispatch(BitcoinActions.selectUSD({ usdId }));
        };

        loadBitcoins() {
            this.dispatch(BitcoinActions.loadUSDs())
        };

        loadBitcoin(usdId: string) {
            this.dispatch(BitcoinActions.loadUSD({ usdId }))
        };

        saveBitcoin(usd: USD) {
            usd.rate ? this.updateBitcoin(usd) : this.createBitcoin(usd)
        };

        createBitcoin(usd: USD) {
            this.dispatch(BitcoinActions.createUSD({ usd }))
        };

        updateBitcoin(usd: USD) {
            this.dispatch(BitcoinActions.updateUSD({ usd }))
        };

        deleteBitcoin(usd: USD) {
            this.dispatch(BitcoinActions.deleteUSD({ usd }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromBitcoins.BitcoinPartialState>,
            private actions$: ActionsSubject
        ) {}
}