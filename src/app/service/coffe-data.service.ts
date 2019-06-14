import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import {observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeDataService {

  constructor(private http : HttpClient) { }

   getCoffeName(){
      return this.http.get('./assets/data/coffe_type.json')
    }



}
