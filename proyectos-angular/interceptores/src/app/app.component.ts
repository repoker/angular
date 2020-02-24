import {Component} from '@angular/core';
import {UsuariosService} from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores';

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuarios()
      .subscribe(usuarios => console.log(usuarios),
        error => console.log('Error en el AppComponent', error));
  }
}
