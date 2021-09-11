import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
