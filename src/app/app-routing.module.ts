import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioingresoComponent } from './components/formularioingreso/formularioingreso.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
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
    path: 'crud', component: FormularioingresoComponent
  },

  {
    path: 'ingresolibro', component: FormularioingresoComponent
  },

  {
    path: 'contacto', component: ContactoComponent
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
