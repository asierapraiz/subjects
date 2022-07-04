import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css']
})
export class CmpOneComponent implements OnInit {

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }

  send(){
    this.service.enviar("Hello")

  }

}
