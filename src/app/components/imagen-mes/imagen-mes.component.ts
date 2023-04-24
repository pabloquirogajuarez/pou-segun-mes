import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen-mes',
  templateUrl: './imagen-mes.component.html',
  styleUrls: ['./imagen-mes.component.css']
})
export class ImagenMesComponent {
  mesSeleccionado: string = ''; // Variable para almacenar el mes seleccionado
  
  meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']; // Arreglo con los nombres de los meses

  constructor() { }
}
