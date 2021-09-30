import { Component, OnInit } from '@angular/core';
import {StorageManagerService} from "../../core/services/storage-manager.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private readonly storageManagerService: StorageManagerService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.storageManagerService.logout();
  }

}
