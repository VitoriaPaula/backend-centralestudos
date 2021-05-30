import { ConfiguracoesClienteComponent } from './configuracoes-cliente/configuracoes-cliente.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component:  CoursesComponent},
    { path: 'alterar', component:  ConfiguracoesClienteComponent},
    { path: 'login', component:  LoginRegisterComponent}
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
