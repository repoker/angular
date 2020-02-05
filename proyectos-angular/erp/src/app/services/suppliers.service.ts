import { Injectable } from '@angular/core';
import {Supplier} from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  proveedores: Supplier[] = [
    {id: 1, nom: 'Hierros Cristobal'},
    {id: 2, nom: 'Derribos FARKA'},
    {id: 3, nom: 'Metales ZZZ'}
  ];
  constructor() { }
  getProveedores(): Supplier[] {
    return this.proveedores;
  }
  getProveedor(id: any): Supplier {
    return this.proveedores.filter(proveedor => proveedor.id === parseInt(id, 10))[0];
  }
}
