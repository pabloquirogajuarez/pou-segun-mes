import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen-mes',
  templateUrl: './imagen-mes.component.html',
  styleUrls: ['./imagen-mes.component.css']
})
export class ImagenMesComponent {
  mesSeleccionado: string = ''; // Variable para almacenar el mes seleccionado
  meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']; // arreglo con los nombres de los meses
  liked: boolean = false;
  likes: number = 0;

  constructor() { }

  compartirEnTwitter() {
    const url = 'https://pabloquirogajuarez.github.io/pou-segun-mes/'; 
    const texto = `Descubrí que pou sos según tu mes de nacimiento 👀.
     Mi mes es ${this.mesSeleccionado}!`;
    const twitterUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`;
    window.open(twitterUrl, '_blank');
  }

  darLike() {
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
  }

}

