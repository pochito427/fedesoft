import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SubirPage } from "../subir/subir";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hayMas:boolean = true;
  posts: Observable<any[]>;

 constructor(private modalCtrl: ModalController, private _cap: CargaArchivoProvider) {
     
 }


  mostrar_modal(){
    let modal = this.modalCtrl.create( SubirPage );
    modal.present();
  }

  doInfinite(infiniteScroll) {  }
  compartir( post:any ){ }


  


}
