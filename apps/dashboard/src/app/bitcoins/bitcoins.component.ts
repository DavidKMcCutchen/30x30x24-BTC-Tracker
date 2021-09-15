import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { USD, emptyUSD } from '@bitcoin/api-interfaces';
import { BitcoinFacade } from '@bitcoin/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bitcoin-bitcoins',
  templateUrl: './bitcoins.component.html',
  styleUrls: ['./bitcoins.component.scss']
})
export class BitcoinsComponent implements OnInit {
  allBitcoins$: Observable<USD[]> = this.bitcoinFacade.allBitcoins$;
  selectedBitcoin$: Observable<USD> = this.bitcoinFacade.selectedBitcoins$;

  form: FormGroup;

  constructor(
    private bitcoinFacade: BitcoinFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.bitcoinFacade.mutations$.subscribe((_) => this.resetBitcoin());
  }

  ngOnInit() {
    this.initForm();
    this.bitcoinFacade.loadBitcoins();
    this.resetBitcoin()

    const bitcoinRouteId = this.route.snapshot.params['id'];

    if (bitcoinRouteId) {
      this.loadUSD((bitcoinRouteId))
    }
  }

  viewUSD(usdId: string) {
    this.router.navigate(["usds", usdId])
  }

  loadUSD(usdId: string) {
    this.bitcoinFacade.selectBitcoin(usdId);
    this.bitcoinFacade.loadBitcoin(usdId);
  }

  selectUSD(usd: USD) {
    this.bitcoinFacade.selectBitcoin(usd.rate)
    this.form.patchValue(usd);
  }

  saveUSD(usd: USD) {
    this.bitcoinFacade.saveBitcoin(usd);
  }

  deleteUSD(usd: USD) {
    this.bitcoinFacade.deleteBitcoin(usd);
  }

  resetBitcoin() {
    this.form.reset();
    this.selectUSD(emptyUSD)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      code: [''],
      symbol: [''],
      rate: [''],
      description: [''],
      rate_float: [null]
    })
  }
}
