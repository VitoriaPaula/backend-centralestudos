import { RegisterComponent } from './register/register.component';
import { ConfiguracoesClienteComponent } from './configuracoes-cliente/configuracoes-cliente.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: '', component:  CoursesComponent},
    { path: 'config', component:  ConfiguracoesClienteComponent},
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
