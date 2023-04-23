import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-trilha',
  templateUrl: './modal-trilha.component.html',
  styleUrls: ['./modal-trilha.component.css'],
})
export class ModalTrilhaComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(ModalTrilhaComponent);
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'app-modal-trilha-app',
  templateUrl: './modal-trilha-app.component.html',
})
export class DialogElementsExampleDialog {}
