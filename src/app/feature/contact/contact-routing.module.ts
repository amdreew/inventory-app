import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact.component";
import {Paths} from "../../shared/models/path/Paths";

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: '',
        redirectTo: Paths.LIST_CONTACT,
        pathMatch: 'full'
      },
      {
        path: Paths.LIST_CONTACT,
        loadChildren: ()=> import('./components/list-contact/list-contact.module').then(m => m.ListContactModule)
      },
      {
        path: `${Paths.VIEW_CONTACT}/:data`,
        loadChildren: () => import('./components/view-contact/view-contact.module').then(m => m.ViewContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
