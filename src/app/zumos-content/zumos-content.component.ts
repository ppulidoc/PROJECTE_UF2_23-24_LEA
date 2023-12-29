// zumos-content.component.ts
import { Component } from '@angular/core';
import { CistellaService } from '../cistella.service';

@Component({
  selector: 'app-zumos-content',
  templateUrl: './zumos-content.component.html',
  styleUrls: ['./zumos-content.component.css'],
})
export class ZumosContentComponent {
  zumosDisponibles: any[] = [
    { nombre: 'Zumo de naranja', precio: 2.5 },
    { nombre: 'Zumo de manzana', precio: 3.0 },
    // ... otros zumos disponibles
  ];

  constructor(public cistellaService: CistellaService) {}

  agregarALaCistella(zumo: any): void {
    this.cistellaService.agregarProducto(zumo);
  }

  quitarDeLaCistella(index: number): void {
    this.cistellaService.quitarProducto(index);
  }
}
