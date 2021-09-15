import { Component } from '@angular/core';


@Component({
  selector: 'bitcoin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Bitcoin Price';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'v1/bpi/currentprice.json', icon: 'view_list', title: 'Bitcoin Price'}
  ]
}
