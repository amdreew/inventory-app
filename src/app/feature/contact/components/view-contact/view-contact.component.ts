import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../../model/Contact";
import {CryptoUtilsService} from "../../../../shared/utils/crypto-utils.service";
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {NavigationService} from "../../../../shared/services/navigation.service";
import {Paths} from "../../../../shared/models/path/Paths";
import {ContactService} from "../../services/contact.service";
import {AlertService} from "../../../../shared/services/alert.service";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  public contact: Contact | undefined;
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
      this.formGroup.setValue({
        'nombres': this.contact?.name,
        'apellidos': this.contact?.lastName,
        'fechaNacimiento': this.contact?.birth,
        'estadoCivil': this.contact?.civilStatus,
        'tieneHermanos': this.contact?.hasBrothers
      });
      console.log(this.formGroup.value);
    } catch (e) {
      await this.return();
    }
  }

  public update(): void {
    const contact: Contact = {
      id: this.contact?.id,
      name: this.formGroup.get('nombres')?.value,
      lastName: this.formGroup.get('apellidos')?.value,
      birth: this.formGroup.get('fechaNacimiento')?.value,
      foto: this.contact?.foto,
      civilStatus: this.formGroup.get('estadoCivil')?.value,
      hasBrothers: this.formGroup.get('tieneHermanos')?.value,
    }
    this.contactService.update(contact).subscribe(ress => {
      this.alertService.viewSuccess('Contacto actualizado con exito!').then(() => {
        console.log(ress)
      });
    });
  }

  public async return() {
    await this.router.navigate(Paths.CONTACT)
  }

}
