import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioingresoComponent } from './components/formularioingreso/formularioingreso.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TablalibroComponent } from './components/tablalibro/tablalibro.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path:'home', redirectTo: ''
  },

  {
    path:'crud', component: TablalibroComponent 
  },

  {
    path: 'ingresolibro/form', component: FormularioingresoComponent 
  },

  {
    path: 'ingresolibro/form/:id', component: FormularioingresoComponent 
  },

  {
    path: 'contacto', component: ContactoComponent
  },

  {
    path: 'nosotros', component: NosotrosComponent
  },

  {
     path: 'perfil', component: ProfileComponent
  },

  {
    path: 'login', component:LoginComponent
  },

  {
    path: '404', component: Pagina404Component
  },

  {
    path: '**', redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
