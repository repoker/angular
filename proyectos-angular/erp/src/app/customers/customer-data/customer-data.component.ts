import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustormersService} from '../../services/custormers.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  id: any;
  cliente: Customer;
  constructor(private router: ActivatedRoute, private clientesService: CustormersService) {
    this.id = router.snapshot.params.id;
    console.log(this.id);
    this.cliente = clientesService.getCliente(this.id);
  }


  ngOnInit() {
  }

}
