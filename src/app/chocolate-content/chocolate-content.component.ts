// chocolate-content.component.ts
import { Component } from '@angular/core';
import { CistellaService } from '../cistella.service';

@Component({
  selector: 'app-chocolate-content',
  templateUrl: './chocolate-content.component.html',
  styleUrls: ['./chocolate-content.component.css'],
})
export class ChocolateContentComponent {
  chocolatesDisponibles: any[] = [
    { nombre: 'Milka', precio: 4.99 },
    { nombre: 'Nestle', precio: 3.99 },
    { nombre: 'Lindor', precio: 5.99 },
    // Agrega más chocolates según sea necesario
  ];

  constructor(private cistellaService: CistellaService) {}

  agregarALaCistella(chocolate: any): void {
    this.cistellaService.agregarProducto(chocolate);
  }
}
