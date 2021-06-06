import { CourserService } from './../courses/courses.service';
import { Cliente } from './../clientes/cliente.module';
import { EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  esconder = true;
  login = true;
  config = false;
  nome = "Vitoria";
  filtroLinguagem: string;
  linguagens: string[]= ["Java", "Python", "C++", "C", "JavaScript"];
  filtroCategoria: string = "";
  filtroSite: string = "";

  constructor(public courseService: CourserService) { }

  ngOnInit(): void {

  }

  onClickSearch(): void {
    if (this.isEmpty(this.filtroLinguagem) && this.isEmpty(this.filtroCategoria) && this.isEmpty(this.filtroSite)) {
      this.esconder = !this.esconder;
    } else {
      console.log(this.filtroLinguagem);
    }
  }

  onClickHide(): void {
    this.config = !this.config;
  }

  clienteLogado(cliente: Cliente): void {
    this.nome = cliente.NM_USUARIO;
    this.login = !this.login;
    //....
  }

  onClickLinguagem(): void {

  }

  onClickCategoria(): void {

  }

  onClickSite(): void {

  }

  isEmpty(str:string) {
    return (!str || str.length === 0 );
}

}
