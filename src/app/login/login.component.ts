// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
    });
  }

  registrarUsuario(): void {
    if (this.registroForm.valid) {
      const nuevoUsuario = this.registroForm.value;
      this.userService.agregarUsuario(nuevoUsuario);
      this.registroForm.reset();
      alert('¡Registro exitoso!');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
