import { NgModule } from '@angular/core';
import { AuthGuard } from '@auth0/auth0-angular';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
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
    path:'home', component: HomeComponent
  },

  {
    path : 'catalogo', component: CatalogoComponent
  },

  {
    path:'crud', component: TablalibroComponent, canActivate: [AuthGuard]
  },

  {
    path: 'ingresolibro/form', component: FormularioingresoComponent, canActivate: [AuthGuard] 
  },

  {
    path: 'ingresolibro/form/:id', component: FormularioingresoComponent, canActivate: [AuthGuard] 
  },

  {
    path: 'contacto', component: ContactoComponent
  },

  {
    path: 'nosotros', component: NosotrosComponent
  },

  {
    path:'perfil', component: ProfileComponent, canActivate: [AuthGuard]
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
