import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': 'ABCD1232543436DEFG09990211448645BBA'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError));
  }

  manejarError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.warn(error);
    return throwError('Error personalizado');
  }
}
