import { PerfilComponent } from './perfil/perfil.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoComponent } from './plato/plato.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './_service/login-guard.service';
import { PerfilDetalleComponent } from './perfil/perfil-detalle/perfil-detalle.component';
import { PrincipalComponent } from './perfil/principal/principal.component';

const appRoutes: Routes = [
    { path: 'plato', component: PlatoComponent, children: [
        { path: '', component: PlatoInicioComponent},        
        { path: 'nuevo', component: PlatoEdicionComponent}, 
        { path: ':id', component: PlatoDetalleComponent}, 
        { path: ':id/editar', component: PlatoEdicionComponent}
    ], canActivate: [LoginGuard]},
    { path: 'consumo', component: ConsumoComponent, canActivate: [LoginGuard] },
    { path: 'consulta', component: ConsultaComponent, canActivate: [LoginGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent}, 
    { path: 'perfil',component: PrincipalComponent,children:[{path: 'detalle',component:PerfilComponent},
    { path: 'editar/:id', component:PerfilDetalleComponent}],canActivate: [LoginGuard]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}