import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    // Aquí no deben estar los componentes standalone
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    // Aquí no deben estar los componentes standalone
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
