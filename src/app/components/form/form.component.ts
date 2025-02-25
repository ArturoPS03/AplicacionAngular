import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Componente del formulario de registro de usuario.
 * 
 * Este componente proporciona un formulario interactivo que incluye campos como 
 * nombre, nombre de usuario, correo electrónico, contraseña y confirmación de contraseña.
 * También incluye validaciones como:
 * - Nombre y nombre de usuario obligatorios
 * - Validación del formato del correo electrónico
 * - Validación de contraseña con requisitos de longitud, número y carácter especial
 * - Verificación de que las contraseñas coincidan
 */
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /** Formulario reactivo que contiene los controles para el formulario de registro */
  form: FormGroup;

  /**
   * Constructor del componente.
   * 
   * Inicializa el formulario con los controles correspondientes.
   * 
   * @param fb - FormBuilder para crear formularios reactivos
   * @param router - Router para la navegación en la aplicación
   */
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],  // Nombre obligatorio
      username: ['', Validators.required],  // Nombre de usuario obligatorio
      email: ['', [Validators.required, Validators.email]],  // Email obligatorio y con formato
      password: ['', [
        Validators.required, 
        Validators.minLength(6),
        this.passwordValidator  // Validador personalizado para la contraseña
      ]],
      confirmPassword: ['', Validators.required],  // Confirmar contraseña obligatorio
    }, { 
      validators: this.passwordMatchValidator  // Validación personalizada para las contraseñas coincidan
    });
  }

  /** Método de ciclo de vida de Angular que se ejecuta al iniciar el componente */
  ngOnInit(): void {}

  /**
   * Validador personalizado para la contraseña.
   * 
   * Verifica que la contraseña contenga al menos un número y un carácter especial.
   * 
   * @param control - Control del formulario que contiene la contraseña
   * @returns Un objeto con un error si la contraseña no cumple con los requisitos, o null si es válida
   */
  passwordValidator(control: any) {
    const password = control.value;
    if (!password) return null;

    // Validación de al menos un número y un carácter especial
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasNumber || !hasSpecialChar) {
      return { passwordStrength: true };
    }
    return null;
  }

  /**
   * Validador personalizado para verificar que las contraseñas coincidan.
   * 
   * Este validador se aplica a nivel de formulario para asegurar que el valor de las contraseñas coincida.
   * 
   * @param form - El grupo de formularios a validar
   * @returns Un objeto con un error si las contraseñas no coinciden, o null si son iguales
   */
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    // Si las contraseñas no coinciden, devuelve un error
    return password === confirmPassword ? null : { mismatch: true };
  }

  /**
   * Maneja el envío del formulario.
   * 
   * Si el formulario es válido, redirige al usuario a la página de inicio.
   * Si el formulario no es válido, muestra un mensaje de error.
   */
  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
      this.router.navigate(['/home']);  // Redirigir a la página de inicio
    } else {
      console.log('Formulario inválido');
    }
  }
}