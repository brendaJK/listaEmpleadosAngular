import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadosService } from '../empleados.service';
import { Empleados } from '../interface/Empleados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  mostrarFormulario: boolean = true;
  nuevoEmpleado: Empleados = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  };

  constructor(private empleadoservice: EmpleadosService) { }

  agregar() {
    if (
      this.nuevoEmpleado.nombre.trim().length === 0 ||
      this.nuevoEmpleado.correo.trim().length === 0 ||
      this.nuevoEmpleado.telefono.trim().length === 0 ||
      this.nuevoEmpleado.fechaNacimiento.trim().length === 0 ||
      this.nuevoEmpleado.sexo.trim().length === 0
    ) {
      return;
    }

    this.empleadoservice.agregarEmpleado(this.nuevoEmpleado);

    this.nuevoEmpleado = {
      id: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: '',
      sexo: ''
    };
    
  }
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;  // Cambia el valor de mostrarFormulario
  }

  
}
