import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Contact} from "../../model/Contact";
import {MatPaginator} from "@angular/material/paginator";
import {ContactService} from "../../services/contact.service";
import {NavigationService} from "../../../../shared/services/navigation.service";
import {Paths} from "../../../../shared/models/path/Paths";
import {Params} from "../../../../shared/models/Params";
import {Action} from "../../../../shared/enums/Action";
import {AlertService} from "../../../../shared/services/alert.service";

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
    private readonly contactService: ContactService,
    private readonly router: NavigationService,
    private readonly alert: AlertService
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

  public async view(contact: Contact) {
    const patams: Params<Contact> = {
      action: Action.UPDATE,
      data: contact
    };
    await this.router.navigate(`${Paths.CONTACT}/${Paths.VIEW_CONTACT}`, JSON.stringify(patams))
  }

  public async save() {
    const patams: Params<null | Contact> = {
      action: Action.SAVE,
      data: null
    };
    await this.router.navigate(`${Paths.CONTACT}/${Paths.VIEW_CONTACT}`, JSON.stringify(patams))
  }

  private renderData(contacts: Contact[]): void {
    this.dataSource = new MatTableDataSource<Contact>(contacts);
  }

  public async deletedContact(id: number) {
    await this.contactService.deletedContact(id).subscribe((res) => {
      this.alert.viewSuccess(res).then(() => {
        this.loadDataInit();
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
