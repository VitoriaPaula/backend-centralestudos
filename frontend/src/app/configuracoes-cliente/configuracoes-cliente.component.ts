import { CoursesComponent } from './../courses/courses.component';
import { ClienteService } from '../clientes/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracoes-cliente',
  templateUrl: './configuracoes-cliente.component.html',
  styleUrls: ['./configuracoes-cliente.component.css']
})
export class ConfiguracoesClienteComponent implements OnInit {

  esconder = true;
  login = true;
  config = false;
  nome = window.localStorage.getItem("NM_USUARIO");

  constructor(public clienteService: ClienteService, private courseComponent: CoursesComponent) { }

  ngOnInit(): void {
  }

}
