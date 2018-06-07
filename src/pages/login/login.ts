import { Component, Injectable } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApiService } from "../../app/services/api.service";
import { StorageService } from "../../app/services/storage.service";


interface ILogin {
  email: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form: ILogin = {
    email: '',
    password: '',
  }
  isFetching: boolean = false
  constructor(private navCtrl: NavController, private apiService: ApiService, private storageService: StorageService) {
  }

  public handleChangeTextInput(event: any, key?: string) {
    this.form = { ...this.form, [key]: event.value }
  }

  public handleSignIn(data) {
    console.log('success', data)
    this.storageService.setKey('token').set(data.token).get(res => { console.log(res, 'sdsa') })
  }

  private signIn() {
    this.apiService.setBody(this.form).setEndPoint('api/login').post(this.handleSignIn.bind(this))
  }
}