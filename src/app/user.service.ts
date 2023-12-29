// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuariosRegistrados: any[] = [];

  constructor() {}

  getUsuariosRegistrados(): any[] {
    return this.usuariosRegistrados;
  }

  agregarUsuario(usuario: any): void {
    this.usuariosRegistrados.push(usuario);
  }
}
