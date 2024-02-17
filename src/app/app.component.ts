import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
 constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const url = 'https://demo68-pl.yourtechnicaldomain.com/api/admin/v3/products/categories';
    const key = 'YXBwbGljYXRpb24xOkNBd0h1OE1lMTh4dkthbHJpdGNjVnNKUzBmSVlEOWYzc3pPdUIxcXBpdTNCSmRUajd4LzBjQmp3cGVWaXozY0g=';
    const header = new HttpHeaders({'x-api-key': key});
    this.http.get(url, {headers: header}).subscribe(data => {
      console.log(data);
    });
}
}