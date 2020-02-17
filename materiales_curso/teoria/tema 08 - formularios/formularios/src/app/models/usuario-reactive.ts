import {NombreCompleto} from './nombre-completo';

export interface UsuarioReactive {
  nombreCompleto: NombreCompleto;
  correo: string;
  aficiones: string[];
}
