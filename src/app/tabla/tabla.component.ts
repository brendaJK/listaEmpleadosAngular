import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from '../empleados.service';
import { Empleados } from '../interface/Empleados';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, FormularioComponent],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private empleadoservice: EmpleadosService) { }
    
  get empleados(): Empleados[] {
    return this.empleadoservice.empleados;
  }
  borrar(id: number) {
    this.empleadoservice.borrarEmpleado(id);
  }
}
