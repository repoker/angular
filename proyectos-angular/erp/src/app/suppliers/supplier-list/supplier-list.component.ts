import { Component, OnInit } from '@angular/core';
import {Supplier} from '../../models/supplier';
import {SuppliersService} from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  proveedores: Supplier[];
  constructor(suppliersService: SuppliersService) {
    this.proveedores = suppliersService.getProveedores();
  }

  ngOnInit() {
  }

}
