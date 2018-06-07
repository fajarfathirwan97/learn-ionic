import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ToastController } from "ionic-angular";
@Injectable()

export class StorageService {
  public key: string
  constructor(private storage: Storage, private toastController: ToastController) {
  }


  public setKey(key: string): StorageService {
    this.key = key;
    return this
  }

  public set(value: string): StorageService {
    this.storage.set(this.key, value)
      .then(res => {
        console.log(res)
      }).catch(err => {
        this.toastController.create({
          message: 'Error set Storage',
          duration: 3000,
          position: 'bottom'
        }).present()
      })
    return this
  }
  public get(succes: any): void {
    this.storage.get(this.key)
      .then(res => { succes(res) })
      .catch(err => {
        this.toastController.create({
          message: 'Error get Storage',
          duration: 3000,
          position: 'bottom'
        }).present()
      })
  }

}