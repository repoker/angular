import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {filter, map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {
    this.suscripcion = this.devuelveObservable().pipe(
      retry(1)
    ).subscribe(
      numero => console.log('Subs ', numero),
      error => console.log('Error en el obs ', error),
      () => console.log('El observable terminó'),
    );
  }

  devuelveObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        const salida = {valor: contador};
        observer.next(salida);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
          // observer.error('Auxilio!');
          this.ngOnDestroy();
        }
      }, 1000);
    }).pipe(
      map(respuesta => respuesta.valor),
      filter(resp => resp % 2 !== 0)
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
    console.log('suscripcion cancelada ok');
  }
}
