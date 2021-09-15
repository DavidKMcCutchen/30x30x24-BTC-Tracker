import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BITCOIN_ENVIRONMENT } from './bitcoin.token';
import { BitcoinEnvironment } from "./bitcoin.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: BitcoinEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BITCOIN_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
