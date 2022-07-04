import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cmp-two',
  templateUrl: './cmp-two.component.html',
  styleUrls: ['./cmp-two.component.css']
})
export class CmpTwoComponent implements OnInit {

  public mensaje: string = "";

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.service.subject$.subscribe(event=>this.mensaje=event as string)
  }

}
