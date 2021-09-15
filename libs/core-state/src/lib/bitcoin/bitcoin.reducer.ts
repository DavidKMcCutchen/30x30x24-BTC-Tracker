import { USD } from "@bitcoin/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as BitcoinActions from './bitcoin.actions';

export const BITCOIN_FEATURE_KEY = 'bitcoins';

export interface BitcoinState extends EntityState<USD> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface BitcoinPartialState {
    readonly [BITCOIN_FEATURE_KEY]: BitcoinState
};

export const bitcoinAdapter: EntityAdapter<USD> = createEntityAdapter<USD>();

export const initialBitcoinState: BitcoinState = bitcoinAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): BitcoinState => ({ ...state, error});

const onDispatch = (state, action): BitcoinState => ({
    ...state,
    loaded: false,
    error: null
});

const _bitcoinReducer = createReducer(
    initialBitcoinState,
    on(
        BitcoinActions.loadUSDFailed,
        BitcoinActions.loadUSDsFailed,
        BitcoinActions.createUSDFailed,
        BitcoinActions.updateUSDFailed,
        BitcoinActions.deleteUSDFailed,
        onFailed
    ),
    on(
        BitcoinActions.loadUSD,
        BitcoinActions.loadUSDs,
        BitcoinActions.createUSD,
        BitcoinActions.updateUSD,
        BitcoinActions.deleteUSD,
        onDispatch
    ),
    on(
        BitcoinActions.loadUSDSuccess, (state, { usd }) =>
        bitcoinAdapter.upsertOne(usd, {...state, loaded: true})
    ),
    on(
        BitcoinActions.selectUSD, (state, { usdId }) => ({
            ...state,
            selectedId: usdId
        })
    ),
    on(
        BitcoinActions.loadUSDsSuccess, (state, { usds }) =>
        bitcoinAdapter.setOne(usds, {...state, loaded: true})
    ),
    on(
        BitcoinActions.deleteUSDSuccess, (state, { usd }) =>
        bitcoinAdapter.removeOne(usd.rate, {...state, loaded: true})
    ),
    on(
        BitcoinActions.updateUSDSuccess, (state, { usd }) =>
        bitcoinAdapter.updateOne(
            {id: usd.rate, changes: usd},
            {...state, loaded: true}
        )
    ),
    on(
        BitcoinActions.createUSDSuccess, (state, {usd }) =>
        bitcoinAdapter.addOne(usd, {...state, loaded: true})
    ),
)

export function bitcoinReducer(
    state: BitcoinState | undefined,
    action: Action
) {
    return _bitcoinReducer(state, action)
}