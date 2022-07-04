import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  subject$ = new Subject();


  enviar(mensaje: string){
    this.subject$.next("Mensaje ==>"+mensaje)
  }
}
