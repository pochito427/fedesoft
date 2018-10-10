import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";
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


  constructor(private viewCtrl: ViewController, private camera: Camera, private imagePicker: ImagePicker, public _cap: CargaArchivoProvider) {
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
    
    let opciones:ImagePickerOptions = {
      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(opciones).then((results) => {
      
            for (var i = 0; i < results.length; i++) {
                this.imagenPreview = 'data:image/jpeg;base64,' + results[i];
                this.imagen64 = results[i];
            }
      
          }, (err) => {
      
            console.log( "ERROR en selector", JSON.stringify(err) );
      
          });
      
  }

  crear_post(){
    let archivo = {
      img: this.imagen64,
      titulo: this.titulo
    }
    this._cap.cargar_imagen_firebase(archivo)
      .then(()=>this.cerrar_modal() )

  }



}
