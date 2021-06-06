import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracoes-cliente',
  templateUrl: './configuracoes-cliente.component.html',
  styleUrls: ['./configuracoes-cliente.component.css']
})
export class ConfiguracoesClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
