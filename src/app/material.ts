import {MatButtonModule, MatCheckboxModule, MatInputModule,MatIconModule,MatRadioModule,MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule,MatIconModule,MatRadioModule,MatSelectModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule,MatRadioModule,MatSelectModule ],
})
export class MaterialModule { }