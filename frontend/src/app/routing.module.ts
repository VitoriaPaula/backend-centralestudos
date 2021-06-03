import { RegisterComponent } from './clientes/register/register.component';
import { ConfiguracoesClienteComponent } from './clientes/configuracoes-cliente/configuracoes-cliente.component';
import { LoginComponent } from './clientes/login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component:  CoursesComponent},
    { path: 'alterar', component:  ConfiguracoesClienteComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'register', component: RegisterComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
