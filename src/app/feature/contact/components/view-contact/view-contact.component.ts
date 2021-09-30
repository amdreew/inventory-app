import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../../model/Contact";
import {CryptoUtilsService} from "../../../../shared/utils/crypto-utils.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NavigationService} from "../../../../shared/services/navigation.service";
import {Paths} from "../../../../shared/models/path/Paths";
import {ContactService} from "../../services/contact.service";
import {AlertService} from "../../../../shared/services/alert.service";
import {Params} from "../../../../shared/models/Params";
import {Action} from "../../../../shared/enums/Action";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  public contact: Params<Contact | null> | undefined;
  public readonly actions = Action;
  public readonly formGroup: FormGroup = new FormGroup({
    'nombres': new FormControl(null, Validators.required),
    'apellidos': new FormControl(null, Validators.required),
    'fechaNacimiento': new FormControl(null, Validators.required),
    'estadoCivil': new FormControl(null, Validators.required),
    'tieneHermanos': new FormControl(null, Validators.required)
  });
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly cryptoUtilsService: CryptoUtilsService,
    private readonly router: NavigationService,
    private readonly contactService: ContactService,
    private readonly alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  private async loadData() {
    try {
      this.activatedRoute.params.subscribe(params => {
        this.contact = JSON.parse(this.cryptoUtilsService.decrypt(params.data))
      });
      if(this.contact?.action === Action.UPDATE) {
        this.formGroup.setValue({
          'nombres': this.contact?.data?.name,
          'apellidos': this.contact?.data?.lastName,
          'fechaNacimiento': this.contact?.data?.birth,
          'estadoCivil': this.contact?.data?.civilStatus,
          'tieneHermanos': this.contact?.data?.hasBrothers
        });
      } else if(this.contact?.action !== Action.SAVE && this.contact?.action !== Action.UPDATE) {
        this.alertService.viewError('la accion no fue bien configurada!').then(() => {
          this.return();
        })
      }
    } catch (e) {
      await this.return();
    }
  }

  public runAction(): void {
    if(this.contact?.action === this.actions.UPDATE) {
      this.update();
    } else if(this.contact?.action === this.actions.SAVE) {
      this.save();
    }
  }

  private update(): void {
    const contact: Contact = this.getContact();
    this.contactService.update(contact).subscribe(ress => {
      this.alertService.viewSuccess('Contacto actualizado con exito!').then(() => {
        this.return();
      });
    });
  }

  private save(): void {
    const contact: Contact = this.getContact();
    contact.foto = 'test de registro';
    this.contactService.save(contact).subscribe(ress => {
      this.alertService.viewSuccess('Contacto guardado con exito!').then(() => {
        this.return();
      });
    });
  }

  private getContact(): Contact {
    return  {
      id: this.contact?.data?.id,
      name: this.formGroup.get('nombres')?.value,
      lastName: this.formGroup.get('apellidos')?.value,
      birth: this.formGroup.get('fechaNacimiento')?.value,
      foto: this.contact?.data?.foto,
      civilStatus: this.formGroup.get('estadoCivil')?.value,
      hasBrothers: this.formGroup.get('tieneHermanos')?.value == "true",
    }
  }

  public async return() {
    await this.router.navigate(Paths.CONTACT)
  }

}
