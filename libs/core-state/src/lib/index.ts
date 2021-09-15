import { ActionReducerMap } from "@ngrx/store";
import * as fromUSDs from './bitcoin/bitcoin.reducer';

export interface AppState {
    [fromUSDs.BITCOIN_FEATURE_KEY]: fromUSDs.BitcoinState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromUSDs.BITCOIN_FEATURE_KEY]: fromUSDs.bitcoinReducer
};