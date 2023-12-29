// cistella.component.ts
import { Component } from '@angular/core';
import { CistellaService } from '../cistella.service';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css'],
})
export class CistellaComponent {
  // Cambia la visibilidad de private a public o simplemente remuévela
  cistellaService: CistellaService;

  constructor(cistellaService: CistellaService) {
    this.cistellaService = cistellaService;
  }

  quitarDeLaCistella(index: number): void {
    // Implementa la lógica para quitar un producto de la cesta
    this.cistellaService.quitarProducto(index);
  }
}
