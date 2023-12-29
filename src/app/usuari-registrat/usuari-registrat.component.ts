// usuari-registrat.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usuari-registrat',
  templateUrl: './usuari-registrat.component.html',
  styleUrls: ['./usuari-registrat.component.css'],
})
export class UsuariRegistratComponent {
  loginForm: FormGroup;
  usuarioIdentificado: boolean = false;
  nombreUsuario: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  iniciarSesion(): void {
    if (this.loginForm.valid) {
      const correo = this.loginForm.get('correo')?.value.toLowerCase();
      const contrasena = this.loginForm.get('contrasena')?.value.toLowerCase();

      const usuariosRegistrados = this.userService.getUsuariosRegistrados();

      const usuarioRegistrado = usuariosRegistrados.find(
        (usuario) => usuario.correo === correo && usuario.contrasena === contrasena
      );

      if (usuarioRegistrado) {
        this.usuarioIdentificado = true;
        this.nombreUsuario = usuarioRegistrado.nombre;
      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    }
  }

  cerrarSesion(): void {
    this.usuarioIdentificado = false;
    this.nombreUsuario = '';
  }
}
