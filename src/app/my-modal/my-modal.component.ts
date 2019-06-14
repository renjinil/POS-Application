import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {

  constructor( private modalService: NgbModal, public dialogRef: MatDialogRef<MyModalComponent>
  ) { }

  ngOnInit() {
  }
   onNoClick(): void {
    this.dialogRef.close();
  }
}
