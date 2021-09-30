import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon}  from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private static async viewIcon(menssage: string, title: string, typeMessage: SweetAlertIcon): Promise<any> {
    return Swal.fire(title, menssage, typeMessage);
  }
  constructor() { }

  public async viewSuccess(menssage: string, title?: string): Promise<any> {
    return AlertService.viewIcon(menssage, title ? title : '', 'success');
  }

  public async viewWarning(menssage: string, title?: string): Promise<any> {
    return AlertService.viewIcon(menssage, title ? title : '', 'warning');
  }
  public async viewError(menssage: string | undefined, title?: string): Promise<any> {
    return AlertService.viewIcon(menssage ? menssage : 'Error desconocido!', title ? title : '', 'error');
  }

}
