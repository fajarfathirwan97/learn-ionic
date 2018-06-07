import { Component, Injectable } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApiService } from "../../app/api.service";


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
  constructor(private navCtrl: NavController, private apiService: ApiService) {
  }

  public handleChangeTextInput(event: any, key?: string) {
    this.form = { ...this.form, [key]: event.value }
  }

  private handleSignIn(data) {
    console.log('success', data)
  }

  private signIn() {
    this.apiService.setBody(this.form).setEndPoint('api/login').post(this.handleSignIn)
  }
}