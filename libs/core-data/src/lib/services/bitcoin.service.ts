import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USD, BitcoinPagination, Bpi } from "@bitcoin/api-interfaces";
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";


const BASE_URL = 'https://api.coindesk.com/';
const MODEL = 'v1/bpi/currentprice.json';



@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.getUrl()).pipe(
      tap((res) => console.log(res)),
      map((response) => response.bpi.USD)
    );
  };

  getOne(id: string): Observable<USD> {
    return this.http.get<USD>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
