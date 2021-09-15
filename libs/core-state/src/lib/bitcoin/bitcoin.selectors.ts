import { emptyUSD } from "@bitcoin/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bitcoinAdapter, BitcoinState, BITCOIN_FEATURE_KEY } from "./bitcoin.reducer";

export const getBitcoinState = createFeatureSelector<BitcoinState>(BITCOIN_FEATURE_KEY);

const { selectAll, selectEntities } = bitcoinAdapter.getSelectors();

export const getBitcoinsLoaded = createSelector(
    getBitcoinState,
    (state: BitcoinState) => state.loaded
);

export const getBitcoinError = createSelector(
    getBitcoinState,
    (state: BitcoinState) => state.error
);

export const getAllBitcoins = createSelector(
    getBitcoinState,
    (state: BitcoinState) => selectAll(state)
);

export const getBitcoinEntities = createSelector(
    getBitcoinState,
    (state: BitcoinState) => selectEntities(state)
);

export const getSelectedBitcoinId = createSelector(
    getBitcoinState,
    (state: BitcoinState) => state.selectedId
);

export const getSelectedBitcoin = createSelector(
    getBitcoinEntities,
    getSelectedBitcoinId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyUSD
);