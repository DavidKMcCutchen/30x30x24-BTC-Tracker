import { Bpi, Time } from "./api-interfaces";

export interface BitcoinPagination {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}