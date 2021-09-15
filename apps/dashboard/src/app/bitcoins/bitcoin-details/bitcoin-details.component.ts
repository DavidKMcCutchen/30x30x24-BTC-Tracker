import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USD } from "@bitcoin/api-interfaces";

@Component({
  selector: 'bitcoin-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.scss']
})
export class BitcoinDetailsComponent {
  currentBitcoin: USD;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set usd(value) {
    if (value) this.originalTitle = value.rate;
    this.currentBitcoin = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
