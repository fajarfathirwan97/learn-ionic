import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastController } from "ionic-angular";

@Injectable()

export class ApiService {

  url: string = 'https://reqres.in/'
  body = {}
  endPoint: string = ''
  isFetching: boolean = false
  constructor(private http: HttpClient, private toastController: ToastController) {
  }
  /**
   * @param Object body
   * setBody
   */
  public setBody(body: Object) {
    this.body = body
    return this
  }


  /**
   * @param String endPoint
   * setEndPoint
   */
  public setEndPoint(endPoint: string) {
    this.endPoint = endPoint
    return this
  }
  public post(success: any) {
    this.isFetching = true
    return this.http.post(`${this.url}${this.endPoint}`, this.body)
      .subscribe(res => {
        success(res);
        this.isFetching = false;
      }, err => {
        this.toastController.create({
          message: err.error.error || err.message,
          duration: 3000,
          position: 'bottom'
        }).present()
        this.isFetching = false;
        console.log(err, 'errro');
      })
  }
}