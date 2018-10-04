import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
    let coordsArray = this.navParams.get("coords").split(",");
    this.lat = Number( coordsArray[0].replace("geo:","") );
    this.lng = Number( coordsArray[1] );
    console.log(  this.lat, this.lng );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }


}
