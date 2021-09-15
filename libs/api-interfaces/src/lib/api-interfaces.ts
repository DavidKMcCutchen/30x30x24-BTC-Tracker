export interface Bpi {
  USD: USD;
  GBP: USD;
  EUR: USD;
};

export interface USD {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};

export const emptyUSD = {
  code: '',
  symbol: '',
  rate: '',
  description: '',
  rate_float: 0
};

export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
};