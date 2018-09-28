import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner:BarcodeScanner, private toastCtrl:ToastController, private platform:Platform) {

  }

  scan(){
    if(!this.platform.is('cordova')){
      console.log("en desktop");
      return;
    }
    this.barcodeScanner.scan().then( (barcodeData) => {
      console.log("result:", barcodeData.text );
      console.log("format:", barcodeData.format );
      console.log("cancelled:", barcodeData.cancelled );
     }, (err) => { console.error("Error: ", err ); });
 
  }

}
