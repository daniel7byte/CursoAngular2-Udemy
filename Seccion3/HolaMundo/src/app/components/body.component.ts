import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar:boolean = false;

  texto:string = "Un gran poder, requiere una gran responsabilidad";
  autor:string = "Ben Parker";

  personajes:string[] = [
    "Spiderman", "Venom", "Dr. Octopus"
  ];
}
