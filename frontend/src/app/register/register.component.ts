import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from './../clientes/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from './../clientes/cliente.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public cliente: Cliente;
  public estaCarregando: boolean = false;
  form: FormGroup;
  public previewImagem: string;
  private snackbar: MatSnackBar

  constructor(public clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
      }),
      // imagem: new FormControl(null, {
      //   validators: [Validators.required]
      // }),
      dataNascimento: new FormControl(null, {
        validators: [Validators.required]
      }),
      cargo: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onSalvarCliente() {
    if (this.form.invalid) {
      return;
    }
    this.estaCarregando = true;
    this.cliente = {
      NM_USUARIO: this.form.value.nome,
      DS_EMAIL: this.form.value.email,
      PASS: this.form.value.password,
      URL_IMAGEM: "",
      DT_NASCIMENTO: this.form.value.dataNascimento,
      DS_CARGO: this.form.value.cargo,
      CD_PERMISSAO: 1,
      CD_USUARIO: ""
    }
    this.clienteService.adicionarCliente(this.cliente)
    .subscribe((dados) => {
      this.cliente = dados
        //Realizar o login
        console.log(this.cliente);
        this.clienteService.showMessage("Cadastro realizado! Realize seu login!", false)
        this.router.navigate(['/login']);
    });
    this.estaCarregando = false;
  }

  onImagemSelecionar(event: Event){
    const arquivo = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({'imagem': arquivo});
    this.form.get('imagem').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImagem = reader.result as string;
    }
    reader.readAsDataURL(arquivo);
  }

}
