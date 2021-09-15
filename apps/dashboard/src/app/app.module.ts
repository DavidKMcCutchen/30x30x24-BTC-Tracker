import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BitcoinsComponent } from './bitcoins/bitcoins.component';
import { BitcoinDetailsComponent } from './bitcoins/bitcoin-details/bitcoin-details.component';
import { BitcoinListComponent } from './bitcoins/bitcoin-list/bitcoin-list.component';
import { MaterialModule } from "@bitcoin/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@bitcoin/core-data";
import { CoreStateModule } from "@bitcoin/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@bitcoin/environment';
import { UiLoginModule } from '@bitcoin/ui-login';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinInfoComponent } from './bitcoin/bitcoin-info/bitcoin-info.component';

@NgModule({
  declarations: [AppComponent, BitcoinsComponent, BitcoinDetailsComponent, BitcoinListComponent, BitcoinInfoComponent, BitcoinComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}