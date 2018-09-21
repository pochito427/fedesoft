import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CANCIONES } from "../../data/data.canciones";
import { Cancion } from "../../interfaces/cancion.interface";
import { Refresher, reorderArray }  from "ionic-angular";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  canciones:Cancion[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando:boolean = false;


  constructor() {

    this.canciones = CANCIONES.slice(0);

  }


  reproducir( cancion:Cancion ){
    this.pausar_audio( cancion );
    if( cancion.reproduciendo ){
      cancion.reproduciendo = false;
      return;
    }
    this.audio.src = cancion.audio;
    this.audio.load();
    this.audio.play();
    cancion.reproduciendo = true;
    this.audioTiempo = setTimeout( ()=> cancion.reproduciendo = false, 6 * 1000  );
  }

  borrar_cancion( idx:number ){
    this.canciones.splice( idx, 1 );
  }

  recargar_canciones( refresher:Refresher ){
    setTimeout( ()=>{
          this.canciones = CANCIONES.slice(0);
          refresher.complete();
    },1500)
  }

  reordenar_canciones( indices:any ){
    this.canciones = reorderArray( this.canciones, indices );

  }



  private pausar_audio( cancionSel:Cancion ){
    clearTimeout( this.audioTiempo );
    this.audio.pause();
    this.audio.currentTime = 0;
    for(  let cancion of this.canciones ){
      if( cancion.nombre != cancionSel.nombre ){
        cancion.reproduciendo = false;
      }
    }
  }


}
