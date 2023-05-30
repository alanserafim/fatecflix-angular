import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css'],
})
export class CertificadoComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoRegistrar() {
    this.router.navigate(['home/certificado']);
  }

  printSimplePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('certificado.pdf');
      },
    })
  }
}
