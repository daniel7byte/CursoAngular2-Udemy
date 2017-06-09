import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Jose Daniel";

  miNombre = "joSe dAnIel";

  arreglo = [1, 2 ,3 ,4 , 5, 6, 7, 8, 9, 10];

  PI = Math.PI ;

  a = Math.random();

  salario = 1234.5;

  heroe = {
    nombre:"Logan",
    clave:"Wolverin",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "14"
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {resolve('Llegó la data!'),3500});
  });

  fecha = new Date;

  idVideo = '6ACl8s_tBzE';

  activar:boolean = true;
}
