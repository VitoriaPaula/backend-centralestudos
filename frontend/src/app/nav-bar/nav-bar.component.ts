import { Router } from '@angular/router';
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
  radioValue = true;
  cliente: Cliente | null;
  filtroLinguagem: string = "";
  linguagens: string[]= ["Java", "Python", "C++", "Vuejs", "Angular"];
  filtroCategoria: string = "";
  categorias: string[] = ["Frontend", "Backend", "Azure", "Mobile", "Arduino"];
  filtroSite: string = "";
  sites: string[] = ["Udemy", "Microsoft", "Cod3r"];

  constructor(public courseService: CourserService,
     private courseComponent: CoursesComponent,
     private router: Router) { }

  ngOnInit(): void {
    const nome = window.localStorage.getItem("NM_USUARIO");
    if(nome == undefined || nome === null ){
      this.login = true;
    }else {
      console.log(nome);
      this.login = false;
      this.cliente = {
        CD_USUARIO: window.localStorage.getItem("CD_USUARIO"),
        NM_USUARIO: window.localStorage.getItem("NM_USUARIO"),
        CD_PERMISSAO: parseInt(window.localStorage.getItem("CD_PERMISSAO")),
        DS_CARGO: window.localStorage.getItem("DS_CARGO"),
        DS_EMAIL: window.localStorage.getItem("DS_EMAIL"),
        DT_NASCIMENTO: new Date(window.localStorage.getItem("DT_NASCIMENTO")),
        PASS: window.localStorage.getItem("PASS")
      }
    }
  }

  onClickSearch(): void {
    this.radioValue = !this.radioValue;
    if (this.isEmpty(this.filtroLinguagem) && this.isEmpty(this.filtroCategoria) && this.isEmpty(this.filtroSite)) {
      this.esconder = !this.esconder;
    } else {
      console.log(this.filtroLinguagem);
      console.log(this.filtroCategoria);
      console.log(this.filtroSite);

      this.courseComponent.ngCursosFiltrados(this.filtroLinguagem, this.filtroCategoria, this.filtroSite);
    }
  }

  isEmpty(str:string) {
    return (!str || str.length === 0 );
}

removeToken() {
  window.localStorage.removeItem("CD_USUARIO");
  window.localStorage.removeItem("NM_USUARIO");
  window.localStorage.removeItem("CD_PERMISSAO");
  window.localStorage.removeItem("DS_CARGO");
  window.localStorage.removeItem("DS_EMAIL");
  window.localStorage.removeItem("DT_NASCIMENTO");
  window.localStorage.removeItem("PASS");

  this.router.navigate(['/']);
  this.login = true;
}

}
