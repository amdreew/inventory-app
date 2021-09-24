import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContactRoutingModule } from './list-contact-routing.module';
import {ListContactComponent} from "./list-contact.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ContactService} from "../../services/contact.service";
import {ContactApiService} from "../../services/contact-api.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [ListContactComponent],
  imports: [
    CommonModule,
    ListContactRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ], providers: [ContactService, ContactApiService]
})
export class ListContactModule { }
