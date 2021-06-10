import { CategoriaNewsletter } from './categoria-newsletter.module';
import { map } from 'rxjs/operators';
import { Newsletter } from './newsletter.module';
import { CourserService } from './../courses/courses.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public estaCarregando: boolean = false;
  categorias: FormGroup
  newsletter: Newsletter;
  listaCategorias: CategoriaNewsletter[] = [];
  private categoriasSubscription: Subscription;
  listaCategoriasEnviar: string[] = [];
  backend: boolean = false;
  frontend: boolean = false;
  azure: boolean = false;
  mobile: boolean = false;
  arduino: boolean = false;

  constructor(public fb: FormBuilder, public courseService: CourserService) {
    this.categorias = this.fb.group({
      backend: this.backend,
      frontend: this.frontend,
      azure: this.azure,
      mobile: this.mobile,
      arduino: this.arduino
    });
  }

  ngOnInit(): void {
     this.courseService.getCategoriasNewsletter(window.localStorage.getItem("CD_USUARIO"));
    this.categoriasSubscription = this.courseService.getListaDeCategoriaCursosAtualizadaObservable()
      .subscribe((dados)  => {
        this.listaCategorias = dados.categorias
        
        this.listaCategorias.forEach((obj) => {
          const a = obj.DS_CATEGORIA;
          if (a == 'Backend') {
            this.backend = true;
          }
          if (a == 'Frontend') {
            this.frontend = true;
          }
          if (a == 'Azure') {
            this.azure = true;
          }
          if (a == 'Mobile') {
            this.backend = true;
          }
          if (a == 'Arduino') {
            this.backend = true;
          }
        });
        
        this.categorias = this.fb.group({
          backend: this.backend,
          frontend: this.frontend,
          azure: this.azure,
          mobile: this.mobile,
          arduino: this.arduino
        });
      })
  }

  selecionaCategoria(): void {
    this.estaCarregando = true;

    this.listaCategoriasEnviar = [];

    if (this.categorias.value.backend) {
      this.listaCategoriasEnviar.push("Backend");
    }
    if (this.categorias.value.frontend) {
      this.listaCategoriasEnviar.push("Frontend");
    }
    if (this.categorias.value.azure) {
      this.listaCategoriasEnviar.push("Azure");
    }
    if (this.categorias.value.mobile) {
      this.listaCategoriasEnviar.push("Mobile");
    }
    if (this.categorias.value.arduino) {
      this.listaCategoriasEnviar.push("Arduino");
    }


    this.newsletter = {
      CD_USUARIO: window.localStorage.getItem("CD_USUARIO"),
      LS_CATEGORIAS: this.listaCategoriasEnviar
    }
    this.courseService.atualizaNewsletter(this.newsletter)
      .subscribe(() => {
        this.courseService.showMessage("Newsletter atualizada com sucesso!", false)
      })
    this.estaCarregando = false;
  }
}
