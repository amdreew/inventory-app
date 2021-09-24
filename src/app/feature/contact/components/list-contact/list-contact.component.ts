import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Contact} from "../../model/Contact";
import {MatPaginator} from "@angular/material/paginator";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  public displayedColumns: String[] = ['name', 'lastName', 'birth', 'civilStatus', 'hasBrothers', 'aciones']
  public dataSource: MatTableDataSource<Contact> = new MatTableDataSource<Contact>()
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator | undefined;

  constructor(
    private readonly contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.loadDataInit();
  }

  private loadDataInit(): void {
    this.contactService.getAll().subscribe(res => {
      this.renderData(res);
    }, (err) => {
      console.error(err.message)
    });
  }

  private renderData(contacts: Contact[]): void {
    this.dataSource = new MatTableDataSource<Contact>(contacts);
  }

}