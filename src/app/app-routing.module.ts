import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import {Paths} from "./shared/models/path/Paths";


const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.LOGIN,
    pathMatch: 'full'
  },
  {
    path: Paths.LOGIN,
    loadChildren: () => import('src/app/feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: Paths.CONTACT,
    loadChildren: () => import('src/app/feature/contact/contact.module').then(m => m.ContactModule),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
