import { Component, OnInit } from '@angular/core';
import {Supplier} from '../../models/supplier';
import {ActivatedRoute} from '@angular/router';
import {SuppliersService} from '../../services/suppliers.service';

@Component({
  selector: 'app-supplier-request',
  templateUrl: './supplier-request.component.html',
  styleUrls: ['./supplier-request.component.css']
})
export class SupplierRequestComponent implements OnInit {
  id: any;
  proveedor: Supplier;
  constructor(private router: ActivatedRoute, private proveedoresService: SuppliersService) {
    this.id = router.snapshot.params.id;
    console.log(this.id);
    this.proveedor = proveedoresService.getProveedor(this.id);
  }

  ngOnInit() {
  }

  pedir() {
    alert('Pedido realizado!');
  }
}
