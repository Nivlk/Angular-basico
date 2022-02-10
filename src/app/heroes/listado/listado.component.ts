import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] =['Spiderman', 'Iroman', 'Hulk', 'Tor', "Capitan America"];
  heroeBorrao: string = '';
  borrarHeroe() {

    this.heroeBorrao = this.heroes.pop() || '';
  }



 
}
