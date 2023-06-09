import { LoginHomeComponent } from './../login.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export enum Perfil {
  ALUNO,
  INSTRUTOR,
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  perfilControl = new FormControl('');
  perfil?: string;

  constructor(
    public dialogRef: MatDialogRef<LoginHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Perfil
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
