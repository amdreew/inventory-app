import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContactRoutingModule } from './list-contact-routing.module';
import {ListContactComponent} from "./list-contact.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [ListContactComponent],
  imports: [
    CommonModule,
    ListContactRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ListContactModule { }
