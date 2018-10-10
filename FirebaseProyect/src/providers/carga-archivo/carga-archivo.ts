import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';


/*
  Generated class for the CargaArchivoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargaArchivoProvider {

  imagenes: ArchivoSubir[] = [];
  lastKey: string = null;


  constructor(public toastCtrl: ToastController,
    public afDB: AngularFireDatabase ) {
      this.cargar_ultimo_key()
      .subscribe( ()=> this.cargar_imagenes() )

  }

  private cargar_ultimo_key(){
    
        return this.afDB.list('/post', ref=> ref.orderByKey().limitToLast(1) )
                  .valueChanges()
                  .map( (post:any) =>{
    
                    console.log(post);
                    this.lastKey = post[0].key;
    
                    this.imagenes.push( post[0] );
    
                  });
    
      }

      cargar_imagenes(){
        return new Promise( (resolve, reject)=>{
          this.afDB.list('/post',
            ref=> ref.limitToLast(3)
                     .endAt( this.lastKey )
           ).valueChanges()
            .subscribe(  (posts:any)=>{
              posts.pop();
              if( posts.length == 0 ){
                console.log('Ya no hay más registros');
                resolve(false);
                return;
           }
              this.lastKey = posts[0].key;
              for( let i = posts.length-1;  i >=0; i-- ){
                let post = posts[i];
                this.imagenes.push(post);
              }
              resolve(true);
            });
       });
      }
    

      cargar_imagen_firebase( archivo: ArchivoSubir){
        let promesa = new Promise( (resolve, reject)=>{
          this.mostrar_toast('Cargando...');
          let storeRef = firebase.storage().ref();
          let nombreArchivo:string = new Date().valueOf().toString(); // 1231231231
          let uploadTask: firebase.storage.UploadTask =
              storeRef.child(`img/${ nombreArchivo }`)
                      .putString( archivo.img, 'base64', { contentType: 'image/jpeg' }  );
             uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
                ()=>{ }, // saber el % de cuantos Mbs se han subido
                ( error ) =>{
                  console.log(JSON.stringify( error ));
                  this.mostrar_toast(JSON.stringify( error ));
                  reject();
                },
                ()=>{
                  this.mostrar_toast('Imagen cargada correctamente');
                  let url = uploadTask.snapshot.downloadURL;
                  this.crear_post( archivo.titulo, url, nombreArchivo );
                  resolve();
                }
              )
       });
        return promesa;
      }

      private crear_post( titulo: string, url: string, nombreArchivo:string ){
        
            let post: ArchivoSubir = {
              img: url,
              titulo: titulo,
              key: nombreArchivo
            };
        
            console.log( JSON.stringify(post) );
            this.afDB.object(`/post/${ nombreArchivo }`).update(post);
        
            this.imagenes.push( post );
        
          }

          mostrar_toast( mensaje: string ){
            
                  this.toastCtrl.create({
                    message: mensaje,
                    duration: 2000
                  }).present();
            
              }
            
        
    
    
    

}

interface ArchivoSubir{
  titulo: string;
  img: string;
  key?: string;
}

