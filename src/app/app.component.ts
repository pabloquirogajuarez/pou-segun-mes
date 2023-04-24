import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pouSegunMes';
  mesSeleccionado: string | undefined; // o el tipo de dato adecuado
}
