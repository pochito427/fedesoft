import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the SubirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo: string = "";
  imagenPreview: string = "";
  imagen64: string;


  constructor(private viewCtrl: ViewController, private camera: Camera) {
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    this.camera.getPicture(options).then((imageData) => {
     this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
     this.imagen64 = imageData;
    }, (err) => {
     // Handle error
     console.log( "ERROR EN CAMARA", JSON.stringify(err) );
    });
  }

  seleccionar_foto(){
    console.log("seleccionar foto");
  }

  crear_post(){
    console.log("crear post");
  }



}
