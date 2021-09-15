import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinInfoComponent } from './bitcoin-info.component';

describe('BitcoinInfoComponent', () => {
  let component: BitcoinInfoComponent;
  let fixture: ComponentFixture<BitcoinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
