import { NgModule } from '@angular/core';
import { PlaceHolderPipe } from './place-holder/place-holder';
@NgModule({
	declarations: [PlaceHolderPipe],
	imports: [],
	exports: [PlaceHolderPipe]
})
export class PipesModule {

	transform(value: string, valorDefecto: string ="Escribe un texto") {
		
			return ( value ) ? value : valorDefecto;
	}

}


	
