import { Injectable } from '@angular/core';
import { Empleados } from './interface/Empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  // para crear una lista de empleados
  private _empleados: Empleados[] = [];

  // Para llevar el seguimiento del ID
  private currentId: number = 0;

  //creamos un metodo GET para acceder a la lista
  get empleados(): Empleados[]{
    return this._empleados;
  }

  //Metodo para agregar un Empleado a la lista 
  agregarEmpleado(empleado: Empleados){
    empleado.id = this.currentId++;
    this._empleados.push(empleado);
    
    // guardamos la lista de empleados en el local storage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
    localStorage.setItem('currentId', this.currentId.toString());
  }

  // Método para borrar un Empleado de la lista
  borrarEmpleado(id: number) {
    this._empleados = this._empleados.filter(empleado => empleado.id !== id);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
    this.currentId = Number(localStorage.getItem('currentId')) || 0;
  }
}
