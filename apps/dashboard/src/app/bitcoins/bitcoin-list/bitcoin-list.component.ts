import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USD } from "@bitcoin/api-interfaces";

@Component({
  selector: 'bitcoin-bitcoin-list',
  templateUrl: './bitcoin-list.component.html',
  styleUrls: ['./bitcoin-list.component.scss']
})
export class BitcoinListComponent {
  @Input() usds: USD[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() bitcoinViewed = new EventEmitter();
}
