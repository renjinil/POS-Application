import { Component, OnInit } from '@angular/core';
import { CoffeDataService } from '../app/service/coffe-data.service';

import { observable } from 'rxjs';
import { Compiler } from '@angular/core';

import { MyModalComponent } from './my-modal/my-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private data: CoffeDataService, private _compiler: Compiler,public dialog: MatDialog) { }
  title = 'caffePiccolo';
  iscoffe: boolean = true;
  iscoffe_confirmed: boolean = false;
  isbillsection: boolean = true;
  payment_ready: boolean = false;
  coffeName$: Object;
  getCoffename: any;
  selected_coffe = [];
  i = 1;
  status: boolean = false;
  added_coffe_name = [];
  qty = {};
  grand_total = 0;
  total_item = [];
  date = new Date();
  billno = 0;
  outputvatPercent = 2;
  outputvat;
  Total_amount;
  cashmodetempt: boolean = true;
  cardmodetempt: boolean = false;
  hdfc_card: boolean = false;
  kodak_card: boolean = false;
  icici_card: boolean = false;
 bank_Name= [
    {value: 'HDFC-0', viewValue: 'HDFC'},
    {value: 'KODAK-1', viewValue: 'KODAK'},
    {value: 'ICICI-2', viewValue: 'ICICI'}
  ];

  select_coffe(value) {
    this.getCoffename = value;
    ((this.getCoffename).flavours).forEach(element => {
      this.selected_coffe.push(element)
    });
    this.iscoffe = !this.iscoffe;
    this.iscoffe_confirmed = !this.iscoffe_confirmed;
  }

  togglef() {
    this.total_item = [];
    this.grand_total = 0;
    this.selected_coffe = [];
    this.getCoffename = [];
    this.iscoffe = !this.iscoffe;
    this.iscoffe_confirmed = !this.iscoffe_confirmed;
    (this.added_coffe_name).forEach(element => {
      for (let props in this.qty) {
        if (element.name == props) {
          if (this.qty[props] == "") {
            element.Total = parseInt(element.amount);
            element.qty = 1;
          } else {
            let net = parseInt(element.amount) * parseInt(this.qty[props]);
            element.Total = net;
            element.qty = this.qty[props];
          }
        }
      }
    });
    (this.added_coffe_name).forEach(element => {
      this.total_item.push(parseInt(element.Total));
    });
    for (let i = 0; i < (this.total_item).length; i++) {
      this.grand_total = this.grand_total + this.total_item[i];
    }
  }

  select_flavour(flavour) {
    this.total_item = [];
    this.grand_total = 0;
    this.added_coffe_name.push(flavour);
    const keyProps = ["name"];
    function unique(arr, keyProps) {
      const kvArray = arr.map(entry => {
        const key = keyProps.map(k => entry[k]).join("|");
        return [key, entry];
      });
      return Array.from(new Map(kvArray).values());
    }
    this.added_coffe_name = unique(this.added_coffe_name, keyProps);

    (this.added_coffe_name).forEach(element => {
      for (let props in this.qty) {
        if (element.name == props) {
          if (this.qty[props] == "") {
            element.Total = parseInt(element.amount);
            element.qty = 1;
          } else {
            let net = parseInt(element.amount) * parseInt(this.qty[props]);
            element.Total = net;
            element.qty = this.qty[props];
          }
        }
      }
    });
    (this.added_coffe_name).forEach(element => {
      this.total_item.push(parseInt(element.Total));
    });
    for (let i = 0; i < (this.total_item).length; i++) {
      this.grand_total = this.grand_total + this.total_item[i];
    }

  }

  modelChanged(value) {
    this.total_item = [];
    this.grand_total = 0;

    (this.added_coffe_name).forEach(element => {
      for (let props in this.qty) {
        if (element.name == props) {
          if (this.qty[props] == "") {
            element.Total = parseInt(element.amount);
            element.qty = 1;
          } else {
            let net = parseInt(element.amount) * parseInt(this.qty[props]);
            element.Total = net;
            element.qty = this.qty[props];
          }
        }
      }
    });
    (this.added_coffe_name).forEach(element => {
      this.total_item.push(parseInt(element.Total));
    });
    for (let i = 0; i < (this.total_item).length; i++) {
      this.grand_total = this.grand_total + this.total_item[i];
    }

  }

  clear_bill() {
    this.added_coffe_name = [];
    this.grand_total = 0;
  }
  payement_proceed() {
    this.outputvat = (this.grand_total) * ((this.outputvatPercent) / 100);
    this.Total_amount = this.outputvat + this.grand_total;
    this.billno++
    this.isbillsection = !this.isbillsection;
    this.payment_ready = !this.payment_ready;
  }
  backto_coffelist() {
    this.isbillsection = !this.isbillsection;
    this.payment_ready = !this.payment_ready;
  }
  cash_pay() {
    this.cardmodetempt = false;
    this.cashmodetempt = true;
    this.status = true;
  }
  card_pay() {
    this.cardmodetempt = true;
    this.cashmodetempt = false;
    this.status = false;
  }
openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px' 
    });
  }
  
 
  ngOnInit() {
    this._compiler.clearCache();
    this.data.getCoffeName().subscribe(
      data => this.coffeName$ = data
    )


  }

}
