import { createAction, props } from "@ngrx/store";
import {  USD } from "@bitcoin/api-interfaces";

// Select Entity

export const selectUSD = createAction(
    '[BITCOIN] Select USD',
    props<{ usdId: string }>()
);

// Load all Entities

export const loadUSDs = createAction(
    '[BITCOIN] Load USDs'
);

export const loadUSDsSuccess = createAction(
    '[BITCOIN] Load USDs Success',
    props<{ usds: USD}>()
);

export const loadUSDsFailed = createAction(
    '[BITCOIN] Load USDs Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadUSD = createAction(
    '[BITCOIN] Load USD',
    props<{ usdId: string}>()
);

export const loadUSDSuccess = createAction(
    '[BITCOIN] Load USD Success',
    props<{ usd: USD}>()
);

export const loadUSDFailed = createAction(
    '[BITCOIN] Load USD Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createUSD = createAction(
    '[BITCOIN] Create USD',
    props<{ usd: USD}>()
);

export const createUSDSuccess = createAction(
    '[BITCOIN] Create USD Success',
    props<{ usd: USD}>()
);

export const createUSDFailed = createAction(
    '[BITCOIN] Create USD Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateUSD = createAction(
    '[BITCOIN] Update USD',
    props<{ usd: USD}>()
);

export const updateUSDSuccess = createAction(
    '[BITCOIN] Update USD Success',
    props<{ usd: USD}>()
);

export const updateUSDFailed = createAction(
    '[BITCOIN] Create USD Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteUSD = createAction(
    '[BITCOIN] Delete USD',
    props<{ usd: USD}>()
);

export const deleteUSDSuccess = createAction(
    '[BITCOIN] Delete USD Success',
    props<{ usd: USD}>()
);

export const deleteUSDFailed = createAction(
    '[BITCOIN] Create USD Failed',
    props<{ error: any}>()
);