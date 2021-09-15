import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { BitcoinsComponent } from './bitcoins/bitcoins.component';
import { LoginComponent, WildComponent } from "@bitcoin/ui-login";
import { BitcoinComponent } from './bitcoin/bitcoin.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'v1/bpi/currentprice.json', component: BitcoinsComponent},
  {path: 'v1/bpi/currentprice.json/:id', component: BitcoinComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }