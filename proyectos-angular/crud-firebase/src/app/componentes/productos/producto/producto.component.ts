import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Producto} from '../../../modelos/producto';
import {ProductoService} from '../../../servicios/producto.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {

    if (productForm.value.$key == null) {
      this.productoService.nuevoProducto(productForm.value);
    } else {
      this.productoService.actualizarProducto(productForm.value);
    }
    this.resetForm(productForm);
    this.toastrService.success('Operación correcta', 'Producto registrado');
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.productoService.productoSeleccionado = new Producto();
    }
  }

}
