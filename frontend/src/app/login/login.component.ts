import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClienteService } from '../clientes/cliente.service';
import { Cliente } from '../clientes/cliente.module';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public cliente: Cliente | undefined;
  private clienteSubscription: Subscription;
  public estaCarregando: boolean = false;

  constructor(public clienteService: ClienteService,
     private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required],
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }
 
  onLoginCliente(): void {
    if (this.form.invalid) {
      return;
    }
    this.estaCarregando = true;
    this.clienteSubscription = (this.clienteService
      .loginCliente(
        this.form.value.email,
        this.form.value.password
      )).subscribe((dados) =>  {
      this.cliente = dados
      console.log(this.cliente)
      this.estaCarregando = false
      if (this.cliente === undefined){
        return;
      }
      else {
        window.localStorage.setItem("NM_USUARIO", this.cliente.NM_USUARIO);
        window.localStorage.setItem("CD_USUARIO", this.cliente.CD_USUARIO);
        window.localStorage.setItem("DS_CARGO", this.cliente.DS_CARGO);
        window.localStorage.setItem("DS_EMAIL", this.cliente.DS_EMAIL);
        window.localStorage.setItem("DT_NASCIMENTO", this.cliente.DT_NASCIMENTO.toString());
        window.localStorage.setItem("PASS", this.cliente.PASS);
        window.localStorage.setItem("CD_PERMISSAO", this.cliente.CD_PERMISSAO.toString());
        
        this.router.navigate(['/'])
      }
    })
    this.estaCarregando = false
  }

}
