// cistella.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CistellaService {

  private cistella: any[] = [];

  obtenerCistella(): any[] {
    return this.cistella;
  }


  agregarProducto(producto: any): void {
    this.cistella.push(producto);
  }

  quitarProducto(index: number): void {
    this.cistella.splice(index, 1);
  }

  obtenerPrecioTotal(): number {
    return this.cistella.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  }

  limpiarCistella(): void {
    this.cistella = [];
  }
}
