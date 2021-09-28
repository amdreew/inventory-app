import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContactRoutingModule } from './view-contact-routing.module';
import {ViewContactComponent} from "./view-contact.component";
import {BreadcrumbModule} from "../../../../shared/components/breadcrumb/breadcrumb.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ContactService} from "../../services/contact.service";


@NgModule({
  declarations: [ViewContactComponent],
  imports: [
    CommonModule,
    ViewContactRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule
  ], providers: [ContactService]
})
export class ViewContactModule { }
