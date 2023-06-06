import { Component, OnInit, ElementRef, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class CertificadoComponent implements OnInit {
  constructor(
    private router: Router, 
    ) {
    }

  ngOnInit() {
  }


  gotoRegistrar() {
    this.router.navigate(['home/certificado']);
  }

  printSimplePDF() {
    let printContents, popupWin;
		printContents = document.getElementById('certificate')!.innerHTML;
    console.log(printContents);
    
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    if(popupWin){
			popupWin.document.open();
			popupWin.document.write(`
				<html>
					<head>
						<title>Certificado</title>
						<style type="text/css">
              .wrapper{
                font-family: Arial, sans-serif;
                
                padding-top: 100px;
                padding-bottom: 500px;
            }
  
            #certificate {
              width: 800px;
              margin: 0 auto;
              border: 1px solid #ccc;
              padding-bottom: 100px;
  
            }
  
            .title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 20px;
              color: var(--primary-text-color);
            }
  
            .subtitle {
              font-size: 18px;
              margin-bottom: 30px;
              color: var(--primary-text-color);
            }
  
            .student {
              font-size: 16px;
              margin-bottom: 10px;
              color: var(--primary-text-color);
            }
  
            .course {
              font-size: 16px;
              margin-bottom: 30px;
              color: var(--primary-text-color);
            }
  
            .date {
              font-size: 14px;
              color: var(--primary-text-color);
            }
  
            .logo{
              margin-top: 10px;
            }
            </style>
            <body onload="window.print();window.close()">${printContents}</body>
          </head>
        </html>
      `)
      popupWin.document.close();
    }
  }
}
