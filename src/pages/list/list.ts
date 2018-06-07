import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, component: object }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =
      [
        {
          title: 'Login',
          note: 'Go to Login Page',
          icon: 'person',
          component : ItemDetailsPage
        }
      ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
    });
  }
}
