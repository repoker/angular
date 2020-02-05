import { Component, OnInit } from '@angular/core';
import {CustormersService} from '../../services/custormers.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  clientes: Customer[];
  constructor(customersService: CustormersService) {
    this.clientes = customersService.getClientes();
  }
  ngOnInit() {
  }

}
