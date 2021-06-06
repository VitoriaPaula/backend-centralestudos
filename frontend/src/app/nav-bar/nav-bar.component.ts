import { CoursesComponent } from './../courses/courses.component';
import { CourserService } from './../courses/courses.service';
import { Cliente } from './../clientes/cliente.module';
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
  cliente: Cliente;
  nome= "Vitoria";
  filtroLinguagem: string = "";
  linguagens: string[]= ["Java", "Python", "C++", "PHP", "JavaScript"];
  filtroCategoria: string = "";
  categorias: string[] = ["Frontend", "Backend", "Azure", "Mobile", "Security"];
  filtroSite: string = "";
  sites: string[] = ["Udemy", "Microsoft", "teste"];

  constructor(public courseService: CourserService, private courseComponent: CoursesComponent) { }

  ngOnInit(): void {
  }

  onClickSearch(): void {
    if (this.isEmpty(this.filtroLinguagem) && this.isEmpty(this.filtroCategoria) && this.isEmpty(this.filtroSite)) {
      this.esconder = !this.esconder;
    } else {
      console.log(this.filtroLinguagem);
      console.log(this.filtroCategoria);
      console.log(this.filtroSite);

      this.courseComponent.ngCursosFiltrados(this.filtroLinguagem, this.filtroCategoria, this.filtroSite);
    }
  }

  onClickHide(): void {
    this.config = !this.config;
  }

  clienteLogado(cliente: Cliente): void {
    this.cliente = cliente;
    this.login = false;
    //window.localStorage.setItem(CLIENT_NAME, cliente.NM_USUARIO);
    //....
  }

  isEmpty(str:string) {
    return (!str || str.length === 0 );
}

}
