import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from 'src/app/shared/models/path/Paths';
import { ContactComponent } from './contact.component';

const routes: Routes = [

  { path:'', 
    component: ContactComponent,
    children: [
      {
        path:'',
        redirectTo: Paths.LIST_CONTACT,
        pathMatch: 'full',
      },
      {
        path: Paths.LIST_CONTACT,
        loadChildren: ()=> import('./components/list-contact/list-contact.module').then(m=> m.ListContactModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
