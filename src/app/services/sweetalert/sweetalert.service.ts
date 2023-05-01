import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetalertService {
  constructor(private route: Router) {}

  public sucess(message: string, title?: string): void {
    //@ts-ignore
    this.showAlert(title, message, 'success');
  }

  public sucessAndMove(message: string, rota: string, title?: string): void {
    //@ts-ignore
    this.showAlertAndMove(title, message, 'success', rota);
  }

  public info(message: string, title?: string): void {
    //@ts-ignore
    this.showAlert(title, message, 'info');
  }

  public error(message: string, title?: string): void {
    //@ts-ignore
    this.showAlert(title, message, 'error');
  }

  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }

  private showAlertAndMove(
    title: string,
    message: string,
    icon: SweetAlertIcon,
    rota: string
  ) {
    Swal.fire(title, message, icon).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate([rota]);
      }
    });
  }
}
