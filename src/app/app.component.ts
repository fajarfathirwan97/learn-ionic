import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { Home } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from './services/storage.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storageService: StorageService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: Home },
    ];
  }
  handleLoggedin(res: string): void {
    if (res) {
      this.menu.enable(true)
      this.nav.setRoot(Home)
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storageService.setKey('token').get(this.handleLoggedin.bind(this))
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.menu.enable(false)
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.menu.close();
    this.storageService.remove()
    this.nav.setRoot(LoginPage)
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
