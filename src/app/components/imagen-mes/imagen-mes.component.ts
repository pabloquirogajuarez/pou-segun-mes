import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-mes',
  templateUrl: './imagen-mes.component.html',
  styleUrls: ['./imagen-mes.component.css']
})
export class ImagenMesComponent implements OnInit{
  mesSeleccionado: string = ''; // Variable para almacenar el mes seleccionado
  meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']; // arreglo con los nombres de los meses
  liked: boolean = false;
  likes: number = 0;
  comentarios: any[] = [];
  nuevoUsuario: string = '';
  nuevoComentario: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.http.get<any[]>('http://localhost:3000/comentarios') // Reemplaza con tu URL
      .subscribe(data => {
        this.comentarios = data;
      });
  }

  agregarComentario(usuario: string, comentario: string) {
    this.http.post('http://localhost:3000/comentarios', { usuario, comentario })
      .subscribe(() => {
        this.obtenerComentarios(); // Actualizar la lista de comentarios
        this.nuevoUsuario = '';
        this.nuevoComentario = '';
      });
    }

  compartirEnTwitter() {
    const url = 'https://pou-segun-mes.vercel.app/'; 
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

