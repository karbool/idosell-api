import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { type } from 'os';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  results:Object[];
  loading:boolean;
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  baseUrl = 'https://demo68-pl.yourtechnicaldomain.com/api/admin/v3/';
  categoryUrl = this.baseUrl + 'products/categories';
  productUrl = this.baseUrl + 'products/products';
  descriptionUrl = this.baseUrl + 'products/descriptions';
  key = 'YXBwbGljYXRpb24xOkNBd0h1OE1lMTh4dkthbHJpdGNjVnNKUzBmSVlEOWYzc3pPdUIxcXBpdTNCSmRUajd4LzBjQmp3cGVWaXozY0g=';
  header = new HttpHeaders({
    'x-api-key': this.key,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  });


  header4 = new HttpHeaders({
    'x-api-key': this.key,
    'resultsLimit': '50',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  });
  

  header2 = new HttpHeaders({
    'x-api-key': this.key, 
    'type': '2',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  });


  listaKategorii: any = [];
  listaProduktow: any = [];
  opisyProduktow: any = [];


  szukajId = 0;
  szukajIdNazwa = '';

  //odczytuje listę kategorii
  getCategories() {
    this.http.get(this.categoryUrl, {headers: this.header})
    .pipe(catchError(this.handleError))
    .subscribe(data => {
      this.listaKategorii = data;
      console.log(this.listaKategorii);
    });
    console.log('category loaded');
  }


  getProducts() {
    this.http.get(this.productUrl, {headers: this.header4})
    .pipe(catchError(this.handleError))
    .subscribe(data => {
      this.listaProduktow = data;
      console.log(data);
    });
    console.log('products loaded');
  }
  

  getDescriptions() {
    this.descriptionUrl = this.descriptionUrl + '?type=id&ids=12';
    this.http.get(this.descriptionUrl, {headers: this.header})
    .pipe(catchError(this.handleError))
    .subscribe(data2 => {
      this.opisyProduktow = data2;
      console.log(data2);
      
    });
    console.log('desc loaded');
  }



  getDescriptions2() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.descriptionUrl, {headers: this.header})
      .toPromise()
      .then(
        res => {
          console.log('ok');
          //resolve();
        }
      );
    });
    return promise;
  }





  ItaApiKey = 'X9ZJBMAIXP9QXKVC3HU6U6PIW24KDNI9';
  ItaApiUrl = 'http://itamesca.com/api/carriers/';

  header3 = new HttpHeaders({
    'ws_key':'X9ZJBMAIXP9QXKVC3HU6U6PIW24KDNI9'
  });
  
  goPresta () {
    this.http.get('https://itamesca.com/api/carriers?ws_key=X9ZJBMAIXP9QXKVC3HU6U6PIW24KDNI9')
    .subscribe(data3 => {
      console.log(data3);
    });
  }




  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }
  ngOnInit(): void {

      console.log('działam!');
      this.getProducts();
     // this.goPresta();
}
}